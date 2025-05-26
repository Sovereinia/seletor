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
        print(f"⚠️ Timeout ou erro carregando {host}: {e}")
        return None

    links = driver.find_elements(By.CSS_SELECTOR, "link[rel*='icon']")
    for link in links:
        href = link.get_attribute("href")
        if href and (".png" in href or ".ico" in href):
            return urljoin(f'https://{host}', href)
    return None

def download(url, path):
    with urllib.request.urlopen(url, timeout=15) as r:
        data = r.read()
        with open(path, 'wb') as f:
            f.write(data)
    return len(data)

def get_root_domain(host):
    parts = host.split('.')
    if len(parts) >= 3:
        return '.'.join(parts[-2:])
    return host

def main(project_root):
    src_path = os.path.join(project_root, "src", "data")
    out_path = os.path.join(project_root, "public", "favicons")

    # 🧹 Limpa favicons antigos
    if os.path.exists(out_path):
        print(f"🧹 Limpando favicons antigos em {out_path}...")
        shutil.rmtree(out_path)
    os.makedirs(out_path, exist_ok=True)

    options = Options()
    options.headless = True
    driver = webdriver.Firefox(options=options)

    for host in collect_hosts(src_path):
        output_file = os.path.join(out_path, f"{host}.png")

        print(f"🌐 Buscando favicon de {host}...")
        url = get_favicon_url(driver, host)

        fallback_used = False
        if url:
            try:
                size = download(url, output_file)
                if size > 300:
                    print(f"✅ Favicon salvo: {output_file}")
                    continue
                else:
                    print(f"⚠️ Favicon pequeno ({size} bytes), apagando.")
                    os.remove(output_file)
            except Exception as e:
                print(f"❌ Erro ao baixar {url}: {e}")

        # fallback se falhar ou for inválido
        root = get_root_domain(host)
        if root != host:
            print(f"🔁 Tentando domínio raiz: {root}")
            url = get_favicon_url(driver, root)
            if url:
                try:
                    size = download(url, output_file)
                    if size > 300:
                        print(f"✅ Favicon salvo (fallback): {output_file}")
                    else:
                        print(f"⚠️ Favicon do fallback pequeno ({size} bytes), apagando.")
                        os.remove(output_file)
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
