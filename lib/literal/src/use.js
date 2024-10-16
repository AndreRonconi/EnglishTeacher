import { relative } from 'path'
import { readFileSync } from 'fs'
import getFiles from './get-files.js'

const rootDir = process.cwd()

export default async function use(arg1, options = {}) {
  if (typeof options === 'string') {
    options = { code: options }
    // console.log('options', options)
  }
  // else if (typeof options === 'function') {
  //   options = { context: { [arg1]: options } }
  //   return Literal
  // }
  else if (options.file) {
    options.code = readFileSync(options.file, 'utf8')
  }


  // Register partial code
  if (options.code) {

    // // Get Literal context
    // if (!options.context) {
    //   options.context = this.options.context
    //   console.log('options', this.options.context)
    //   // this.options.context
    // }

    this.partials[arg1] = this.compile(options.code, options)
    // console.log(this.partials)
  }
  // Register partials dir
  else {
    const dir = arg1
    // Utilizando o glob para buscar arquivos .hbs de forma recursiva
    // getFiles(dir, /\.html$/i)
    getFiles(`${rootDir}/${dir}`, /\.html$/i)
      // glob.sync(`${dir}/**/*.html`)
      .forEach(file => {
        const template = readFileSync(file, 'utf8')


        // Extrai o nome do partial a partir do caminho do arquivo
        // const name = relative(dir, file).replace(/\.html$/, '')
        const name = relative(`${rootDir}/${dir}`, file).replace(/\.html$/, '')

        // TODO: dá para melhorar?
        // options.filename = file.replace(rootDir, '')
        options.filename = file

        this.partials[name] = this.compile(template, options)
      })
  }
}