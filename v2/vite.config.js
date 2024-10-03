import { defineConfig } from 'vite'
import Literal from './lib/literal/Literal.js'
import config from './config.js'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    {
      name: 'app-literal',
      enforce: 'pre',
      // async transformIndexHtml(html, { filename }) {
      async transformIndexHtml(html) {
        Literal.use('/partials')
        return Literal.render(html, config)
      }
    }
  ]
})