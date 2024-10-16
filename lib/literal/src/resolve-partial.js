export default function resolvePartial (name, scope = {}, options = {}) {
  if (!this.partials[name]) {
    throw(new Error('Partial not found: ' + name))
  }
  return this.partials[name](scope, options)
}
