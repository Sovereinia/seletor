# 🖼️ favicon-scraper — coletor de favicons com Firefox headless

Este script em Python usa **Selenium com Firefox headless** para acessar sites listados em arquivos `.ts` e baixar os respectivos favicons. É útil para projetos que listam muitos domínios e desejam exibir seus ícones localmente (como um guia de apps).

---

## ⚙️ Requisitos

- Python 3.7+
- Firefox
- geckodriver
- pip

### Instalação

```bash
sudo dnf install firefox geckodriver
pip install selenium
```

---

## ▶️ Uso

```bash
python fetch_favicons.py --root ~/guia
```

- `--root` é o caminho para o diretório raiz do projeto, onde estão:
  - `src/data/` → arquivos `.ts` com URLs
  - `public/favicons/` → onde os favicons serão salvos

---

## 🧠 Como funciona

1. Coleta todos os domínios encontrados em `src/data/*.ts` (regex).
2. Acessa `https://dominio` com Firefox headless.
3. Espera o carregamento completo da página.
4. Procura por `<link rel="icon">` com `.png` ou `.ico`.
5. Faz o download do favicon e salva como `public/favicons/dominio.png`.
6. Se não encontrar no subdomínio, tenta o domínio raiz (`docs.site.com → site.com`).
7. Remove favicons antigos antes de iniciar.

---

## 🧹 Comportamento inteligente

- Timeout de carregamento: `30s`
- Requisições falhas ou arquivos muito pequenos são descartados.
- Domínios sem favicon visível são ignorados com aviso.

---

## 📁 Estrutura esperada

```
guia/
├── src/
│   └── data/
│       └── apps.ts   # onde estão os domínios
└── public/
    └── favicons/     # onde os ícones serão salvos
```

---

## ✅ Exemplo de saída

```
🧹 Limpando favicons antigos em public/favicons...
🌐 Buscando favicon de crianca.sovereinia.org...
⬇️  Baixando de https://crianca.sovereinia.org/client/assets/images/favicon.png
✅ Favicon salvo: public/favicons/crianca.sovereinia.org.png
```

---

## 🛠️ Possíveis melhorias futuras

- Suporte a fallback para `/favicon.ico`
- Conversão para `.png` mesmo se o original for `.ico`
- Barra de progresso ou logs em JSON

---

## 📄 Licença

MIT — Faça o que quiser, mas dê os créditos :)
