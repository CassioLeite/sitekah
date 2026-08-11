# Contabilidade para Tech — Landing Page

Landing page estática (Vue 3 + Vite + Tailwind) para contabilidade online voltada a profissionais de tecnologia.

**Versão:** v1.1 (polish de copy, trust, config e deploy)

## Stack

- Vue 3
- Vite
- Tailwind CSS v4
- Hospedagem: GitHub Pages (site estático, sem backend)

## Pré-requisitos

- Node.js 20+ (recomendado)
- npm

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço do terminal (geralmente `http://localhost:5173`).

> Com `base: '/sitekah/'` no Vite, a URL local fica `http://localhost:5173/sitekah/`.

## Build

```bash
npm run build
```

Saída: pasta **`dist/`**.

Pré-visualizar o build:

```bash
npm run preview
```

## Configuração (`src/config.js`)

Tudo que muda entre ambientes e dados reais fica centralizado:

| Campo | Uso |
|-------|-----|
| `brandName` | Nome da marca no header/footer |
| `accountant.name` / `crc` / `bio` / `initials` | Seção Sobre |
| `whatsapp.phone` | Número internacional, só dígitos |
| `whatsapp.defaultMessage` | Mensagem pré-preenchida do CTA |
| `seo.canonicalUrl` / `ogImage` | SEO e Open Graph |

Exemplo de telefone: `5511999999999`.

Espelhe as URLs de SEO também em `index.html` ao publicar.

## GitHub Pages

### Base path

Em `vite.config.js`:

| Cenário | Valor de `base` |
|---------|-----------------|
| Página de repositório (`usuario.github.io/sitekah/`) | `'/sitekah/'` |
| Domínio customizado na raiz | `'/'` |

### Build e publicação

1. Ajuste o `base` conforme a tabela acima.
2. Rode `npm run build` — a saída vai para **`dist/`**.
3. Publique o conteúdo de `dist/` de uma destas formas:
   - **GitHub Actions** (recomendado): workflow que faz build e publica via Pages
   - **Branch `gh-pages`**: envie o conteúdo de `dist/` para essa branch e configure Pages para usá-la

Exemplo mínimo de workflow (`.github/workflows/deploy.yml`):

```yaml
name: Deploy GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

Ative GitHub Pages no repositório com source **GitHub Actions**.

## Documentação

- [Product spec](docs/product-spec.md)
- [Design spec](docs/design-spec.md)
- [Implementation plan](docs/implementation-plan.md)

## Placeholders a substituir

| Item | Onde |
|------|------|
| Telefone WhatsApp | `src/config.js` → `whatsapp.phone` |
| Nome / CRC / bio / iniciais | `src/config.js` → `accountant.*` |
| Foto profissional | `AboutSection.vue` (bloco placeholder) |
| URL canônica / OG | `index.html` + `src/config.js` → `seo` |
| Nome da marca | `src/config.js` → `brandName` |
| Base path | `vite.config.js` → `base` |
