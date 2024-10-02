import { readdirSync, statSync } from 'fs'
import { join } from 'path'

export default function (dir, pattern) {
  let files = []

  function walk(directory) {
    const items = readdirSync(directory)
    for (const item of items) {
      const itemPath = join(directory, item)
      const stats = statSync(itemPath)
      if (stats.isDirectory()) {
        walk(itemPath) // Recursivamente percorre subdiretórios
      } else if (stats.isFile() && item.match(pattern)) {
        files.push(itemPath) // Adiciona o caminho do arquivo se corresponder ao padrão
      }
    }
  }

  walk(dir)
  return files
}