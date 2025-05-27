import { defineConfig } from 'vite'
import Literal from './lib/literal/Literal.js'
import config from './config.js'
import cursos from './cursos/cursos-data.js'
import { resolve } from 'path'
import { buildArticlesPlugin } from './lib/build-articles.js' // nova importação

const sitePath = process.env.NODE_ENV === 'production' ? '' : '/dist'
// const sitePath = '/dist'

Literal.options.context = config
Literal.options.context.cursos = cursos
Literal.options.context.sitePath = sitePath

// verifica se variável existe
// Literal.options.context.exists = function (variable) {
//   console.log(variable, Literal.options.context)
//   return typeof Literal.options.context[variable] !== 'undefined'
// }

export default defineConfig({
  server: {
    port: 3000,
  },
  // base: `/v2/dist/`,
  base: sitePath,
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
    buildArticlesPlugin() // adicionado o plugin para geração dos artigos
  ],
  build: {
    // outDir: "./build",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        artigos: resolve(__dirname, "artigos/index.html"),
        cursos: resolve(__dirname, "cursos/index.html"),
        links: resolve(__dirname, "links.html"),
        clicaqui: resolve(__dirname, "clique_aqui/index.html"),
        smart: resolve(__dirname, "smart.html"),
        test: resolve(__dirname, "index2.html"),
        planos: resolve(__dirname, "planos/index.html"),
      },
    },
  },
})
