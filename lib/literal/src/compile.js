import vm from 'vm'
import resolve from './resolve.js'
import parseError from './parse-error.js'

// TODO
let global_escape

function escapeTemplateString(text) {
  let depth = 0
  let result = ''

  // Iteramos sobre cada caractere do texto
  for (let i = 0; i < text.length; i++) {
    const char = text[i]

    if (char === '$' && text[i + 1] === '{') {
      depth++
      result += char
    }
    else if (char === '}' && depth > 0) {
      depth--
      result += char
    }
    else if (char === '`' && depth === 0) {
      result += '\\`'
    }
    else {
      result += char
    }
  }

  return result;
}

function resolve2(parts, ...values) {
  let result = parts[0];

  for (let i = 0; i < values.length; i++) {
    let value = values[i]

    // Converte array
    if (Array.isArray(value)) {
      value = value.join('')
    }

    // unsafe
    // if (typeof value === 'object' && value !== null) {
    //   if (value.unsafe) {
    //     result += String(value) + parts[i + 1]
    //     continue
    //   }
    //   value = value.toString()
    // }
    // // safe: escape
    // else {
    //   result += escapeHtml(String(value)) + parts[i + 1]
    // }

    if (global_escape) {
      result += escapeHtml(String(value)) + parts[i + 1]
    }
    else {
      result += String(value) + parts[i + 1]
    }
  }

  return result
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// function unsafe (parts, ...values) {
//   console.log('str', str)
//   const s = new String(Array.isArray(str) ? str.join('') : str)
//   s.unsafe = true
//   return s
// }

// function resolvePartial(name, context) {
//   if (!Literal.partials[name]) {
//     throw new Error('Partial "' + name + ' not found."')
//   }
//   // console.log('asd', Literal.partials)
//   return Literal.partials[name](context)
// }

export default function compile(template, options = {}) {
  const {
    openDelimiter = '${',
    closeDelimiter = '}',
    // compileDebug = true,
    escape = false,
    vm: useVM = true,
    async = false,
    filename,
    // partials = {},
    // context = {}
  } = options

  // console.log('options', this.options.context)

  // const context = this.options.context
  const context = {
    ...this.options.context,
    ...(options.context || {})
  }
  const partials = this.partials || {}

  global_escape = escape

  let escapedTemplate = template
  if (openDelimiter !== '${') {
    escapedTemplate = escapedTemplate
      .replace(/\$\{/g, '\\${')
      .replace(openDelimiter, '${')
  }
  if (closeDelimiter !== '}') {
    escapedTemplate = escapedTemplate
      .replace(closeDelimiter, '}')
    // .replace(/\}/g, '\\}')
  }

  try {
    const Literal = this
    if (useVM) {
      return function (scope) {

        // console.log('_resolve`' + (template) + '`')
        const script = new vm.Script('_resolve`' + (template) + '`', {
          // const script = new vm.Script('_resolve`' + escapeTemplateString(template) + '`', {
          filename,
          // lineOffset: 1,
          displayErrors: true,
        })
        const sandbox = {
          ...scope,
          ...partials,
          ...context,
          _resolve: async ? resolve : resolve2,
          _escape: escapeHtml,
          // include: include,
          partial() {
            return Literal.resolvePartial.apply(Literal, arguments)
          },
          // _unsafe: unsafe
        }
        const contextifiedSandbox = vm.createContext(sandbox)
        return script.runInContext(contextifiedSandbox)
      }
    }
    else {
      return new Function('scope', `with(scope) { return ${async ? 'scope._resolve' : ''}\`${escapedTemplate}\`; }`)
    }
  }
  catch (e) {
    // const errorDetails = parseError(e, html)
    const errorDetails = parseError(e, template)
    // reject(errorDetails)
    throw errorDetails
  }

}
