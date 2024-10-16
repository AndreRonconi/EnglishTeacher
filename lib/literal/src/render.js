export default function render (name, scope = {}, options = {}) {
  Object.assign(this.options, options)
  const template = this.compile(name, options)
  return template(scope)
}
