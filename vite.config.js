import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Ajuste `base` para o nome do repositório no GitHub Pages.
// Ex.: se o repo for `usuario/sitekah`, use `base: '/sitekah/'`.
// Para domínio customizado na raiz, use `base: '/'`.
export default defineConfig({
  base: '/sitekah/',
  plugins: [vue(), tailwindcss()],
})
