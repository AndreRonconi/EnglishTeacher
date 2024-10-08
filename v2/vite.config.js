import { defineConfig } from 'vite'
import Literal from './lib/literal/Literal.js'
import config from './config.js'
import cursos from './cursos/cursos-data.js'
import { resolve } from 'path'

Literal.options.context = config
Literal.options.context.cursos = cursos

export default defineConfig({
  server: {
    port: 3000,
  },
  // base: `${process.cwd()}/`,
  plugins: [
    {
      name: 'app-literal',
      enforce: 'pre',
      // async transformIndexHtml(html, { filename }) {
      async transformIndexHtml(html) {
        Literal.use('/partials')
        return Literal.render(html)
      }
    },
  ],
  build: {
    // outDir: "./build",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cursos: resolve(__dirname, "cursos/index.html"),
        links: resolve(__dirname, "links.html"),
        clicaqui: resolve(__dirname, "clique_aqui/index.html"),
      },
    },
  },
})
