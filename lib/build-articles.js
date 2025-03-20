import fs from 'fs/promises'
import path from 'path'
import dayjs from 'dayjs'
import { marked } from 'marked'
import yaml from 'js-yaml'
import slugify from '@sindresorhus/slugify'

import Literal from './literal/Literal.js'

// Exporta a função que cria o plugin para geração de artigos
export function buildArticlesPlugin() {
	return {

		// Nome do plugin para identificação
		name: 'build-articles',

		// Hook acionado ao finalizar o bundle do Vite
		async closeBundle() {
			try {

				// Define o diretório onde os arquivos markdown estão localizados
				const pagesDir = path.resolve(process.cwd(), 'artigos/paginas')
        
				// Define o diretório de saída para os arquivos HTML gerados
				const outputDir = path.resolve(process.cwd(), 'dist/artigos')
        
				// Define o diretório de saída para os arquivos HTML gerados
				const htmlTemplate = await fs.readFile('artigos/artigo.html', 'utf-8')	
        
				// Cria o diretório de saída se não existir
				await fs.mkdir(outputDir, { recursive: true })
        
				// Lê todos os arquivos do diretório de markdown
				const files = await fs.readdir(pagesDir)
        
				const articles = []

				// Para cada arquivo encontrado
				for (const file of files) {
          
					// Verifica se o arquivo possui extensão .md
					if (file.endsWith('.md')) {
            
						// Cria o caminho completo para o arquivo markdown
						const filePath = path.join(pagesDir, file)
            
						// Lê o conteúdo do arquivo
						const md = await fs.readFile(filePath, 'utf-8')
            
						 // Split YAML front matter and markdown content
						const [frontMatter, markdown] = md.split('===')
						const metas = yaml.load(frontMatter) // Parse YAML front matter
						metas.dateISO = dayjs(metas.date).toISOString()
						// metadata.fulldate = dayjs(metadata.date).format('DD/MM/YYYY HH:mm')
						metas.dateFormated = dayjs(metas.date).format('DD/MM/YYYY')
						metas.url = `/artigos/${metas.slug}.html`
						metas.slug = slugify(metas.title)

						const content = marked(markdown) // Convert markdown to HTML

						// Pass metadata and content to the template
						const html = Literal.render(htmlTemplate, { ...metas, content })
            
						// Define o caminho completo do arquivo HTML de saída
						const outputFile = path.join(outputDir, `${metas.slug}.html`)
            
						// Escreve o conteúdo HTML no arquivo de saída
						await fs.writeFile(outputFile, html, 'utf-8')
            
						// Loga no console o sucesso da geração do artigo
						console.log(`Artigo gerado: ${outputFile}`)

						articles.push({ ...metas })
					}
				}

				// Renderiza também listagem de artigos
				const articlesHtml = Literal.renderFile('artigos/index.html', { articles })
				const articlesOutputFile = path.join(outputDir, 'index.html')
				await fs.writeFile(articlesOutputFile, articlesHtml, 'utf-8')
				console.log(`Lista de ${articles.length} artigos gerada: ${articlesOutputFile}`)
			} 
			catch (error) {
        
				// Em caso de erro, exibe a mensagem de erro no console
				console.error('Erro ao gerar artigos:', error)
			}
		}
	}
}
