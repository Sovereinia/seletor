import os
import re
import argparse
import urllib.request
from urllib.parse import urljoin
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
import time
import shutil
from PIL import Image
import cairosvg
import tempfile

def collect_hosts(src_data_path):
    hosts = set()
    pattern = re.compile(r'https?://([\w\.\-]+)')
    for root, _, files in os.walk(src_data_path):
        for f in files:
            if f.endswith('.ts'):
                with open(os.path.join(root, f), 'r', encoding='utf-8') as file:
                    text = file.read()
                    hosts.update(pattern.findall(text))
    return sorted(hosts)

def get_favicon_url(driver, host):
    print(f"🔄 Tentando https://{host}")
    try:
        driver.set_page_load_timeout(30)
        driver.get(f'https://{host}')
        WebDriverWait(driver, 30).until(
            lambda d: d.execute_script("return document.readyState") == "complete"
        )
        time.sleep(2)
    except Exception as e:
        print(f"⚠ Timeout ou erro carregando {host}: {e}")
        return None

    links = driver.find_elements(By.CSS_SELECTOR, "link[rel*='icon']")
    for link in links:
        href = link.get_attribute("href")
        if href and (".png" in href or ".ico" in href or ".svg" in href):
            return urljoin(f'https://{host}', href)
    return None

def download_and_convert_to_png(url, output_png_path):
    with urllib.request.urlopen(url, timeout=15) as r:
        content_type = r.headers.get("Content-Type", "")
        data = r.read()

    if "png" in content_type:
        with open(output_png_path, 'wb') as f:
            f.write(data)
        return len(data)

    with tempfile.NamedTemporaryFile(delete=False) as tmp_file:
        tmp_file.write(data)
        tmp_path = tmp_file.name

    try:
        if "svg" in content_type or url.endswith(".svg"):
            cairosvg.svg2png(url=tmp_path, write_to=output_png_path)
        else:
            with Image.open(tmp_path) as img:
                img.save(output_png_path, format='PNG')
        os.remove(tmp_path)
        return os.path.getsize(output_png_path)
    except Exception as e:
        print(f"❌ Erro ao converter para PNG: {e}")
        if os.path.exists(tmp_path):
            os.remove(tmp_path)
        return 0

def get_root_domain(host):
    parts = host.split('.')
    if len(parts) >= 3:
        return '.'.join(parts[-2:])
    return host

def main(project_root):
    src_path = os.path.join(project_root, "src", "data")
    out_path = os.path.join(project_root, "public", "favicons")

    if os.path.exists(out_path):
        print(f"🧹 Limpando favicons antigos em {out_path}...")
        shutil.rmtree(out_path)
    os.makedirs(out_path, exist_ok=True)

    options = Options()
    options.headless = True
    driver = webdriver.Firefox(options=options)

    for host in collect_hosts(src_path):
        output_path = os.path.join(out_path, f"{host}.png")

        print(f"🌐 Buscando favicon de {host}...")
        url = get_favicon_url(driver, host)

        if url:
            try:
                size = download_and_convert_to_png(url, output_path)
                if size > 300:
                    print(f"✅ Favicon salvo: {output_path} ({size} bytes)")
                    continue
                else:
                    print(f"⚠ Favicon pequeno ({size} bytes), apagando.")
                    os.remove(output_path)
            except Exception as e:
                print(f"❌ Erro ao baixar {url}: {e}")

        root = get_root_domain(host)
        if root != host:
            print(f"🔁 Tentando domínio raiz: {root}")
            url = get_favicon_url(driver, root)
            if url:
                try:
                    size = download_and_convert_to_png(url, output_path)
                    if size > 300:
                        print(f"✅ Favicon salvo (fallback): {output_path} ({size} bytes)")
                    else:
                        print(f"⚠ Favicon do fallback pequeno ({size} bytes), apagando.")
                        os.remove(output_path)
                except Exception as e:
                    print(f"❌ Erro ao baixar favicon do fallback {url}: {e}")
            else:
                print(f"❌ Nenhum favicon encontrado em {host} nem em {root}")
        else:
            print(f"❌ Nenhum favicon encontrado em {host}")

    driver.quit()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--root', required=True)
    args = parser.parse_args()
    main(os.path.expanduser(args.root))
