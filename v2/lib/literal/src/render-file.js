import { join } from 'path'
import { readFileSync } from 'fs'

export default function renderFile (filePath, scope = {}, options = { views: [] }) {
  const { root, views, filename = filePath } = options

  let fullPath = filePath
  if (!fullPath.startsWith("/")) {
    // const paths = [root, ...views]
    filePath = join(root || process.cwd(), filename)
    //   fullPath = paths.find((path) => existsSync(join(path, filePath)))
    
  }

  const fileContent = readFileSync(fullPath, "utf-8")
  return this.render(fileContent, scope, { ...options, filename })
}