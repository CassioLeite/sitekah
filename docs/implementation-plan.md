# Implementation Plan

## Stack
- Vue 3 + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Sem UI kits externos
- Site 100% estático

## Estrutura
```
src/
  config.js          # brand, contadora, WhatsApp, SEO, trust
  App.vue            # composição das seções
  components/        # seções + WhatsAppButton + header/footer
docs/                # product / design / implementation
```

## Configuração crítica
1. `src/config.js` → `whatsapp.phone`, `accountant.*`, `seo.*`
2. `vite.config.js` → `base` (`/sitekah/` ou `/`)
3. `index.html` → canonical + OG (espelhar `seo`)

## Deploy GitHub Pages
1. Ajustar `base` no Vite
2. `npm run build` → `dist/`
3. Publicar `dist/` via GitHub Actions ou branch `gh-pages`

## Ordem de implementação (v1)
1. Scaffold + Tailwind + tokens
2. Config e botão WhatsApp
3. Seções da landing
4. SEO / OG / README
5. Build de verificação

## v1.1 polish
- Reorganizar `config.js` (whatsapp aninhado, SEO canônico)
- Unificar CTAs WhatsApp + mensagem padrão atualizada
- Polish de copy PT-BR
- About com iniciais; trust signals honestos
- Ajustes mobile + README de Pages

## Próximos passos sugeridos
- Substituir placeholders (nome, CRC, foto, telefone)
- Gerar OG image real (1200×630)
- Domínio customizado + `base: '/'`
- Revisar FAQ com a contadora
