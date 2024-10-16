export default async function resolve (parts, ...values) {
  // Resolve promises
  const resolvedValues = await Promise.all(
    values.map(v => 
      typeof v === 'object' && v.constructor?.name === 'Promise' ? v : v
    )
  )

  // Monta a string final, intercalando as partes fixas com os valores resolvidos
  let str = parts[0]
  resolvedValues.forEach((value, index) => {
    str += value + parts[index + 1]
  })

  return str
}
