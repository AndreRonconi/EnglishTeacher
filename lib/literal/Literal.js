import compile from './src/compile.js'
import resolve from './src/resolve.js'
import resolvePartial from './src/resolve-partial.js'
import render from './src/render.js'
import renderFile from './src/render-file.js'
import use from './src/use.js'

class Literal {

  static partials = {}
  static options = {
    context: {}
  }
  partials = {}
  options = {
    context: {}
  }

  constructor(options) {
    this.options = options
    // this.partials = {}
    // this.context = {}
  }

  static compile = compile
  static resolve = resolve
  static resolvePartial = resolvePartial
  static render = render
  static renderFile = renderFile
  static use = use

  compile = compile
  resolve = resolve
  resolvePartial = resolvePartial
  render = render
  renderFile = renderFile
  use = use

}

export { Literal }
export default Literal
