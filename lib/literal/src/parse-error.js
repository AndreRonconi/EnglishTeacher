export default function parseError (e, html) {
  const stackLines = e.stack.split("\n")
  const errorLine = stackLines[0]
  const match = stackLines[1].match(/<anonymous>:(\d+):\d+/)
  if (match) {
    const lineNumber = parseInt(match[1], 10)
    const htmlLines = html.split("\n")
    const errorSnippet = htmlLines
      .slice(Math.max(0, lineNumber - 2), lineNumber + 1)
      .join("\n")
    return `${errorLine}\n\nFile: ${e.filename}\n\nError Occurred at Line ${lineNumber}:\n${errorSnippet}`
  }

  // Fallback if line number couldn't be determined
  return e.stack 
}