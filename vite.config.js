import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sharp from 'sharp'
import { readdir, stat, writeFile } from 'fs/promises'
import { join, extname, basename } from 'path'

function imageOptimize({ avifQuality = 70, webpQuality = 75, maxWidth = 1200, exclude = [] } = {}) {
  let outDir = 'dist'
  return {
    name: 'image-optimize',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    async closeBundle() {
      if (outDir !== 'dist') return
      const distDir = join(process.cwd(), 'dist')
      const files = await readdir(distDir)
      const imageExts = ['.jpg', '.jpeg', '.png', '.webp']

      for (const file of files) {
        const ext = extname(file).toLowerCase()
        if (!imageExts.includes(ext)) continue
        if (exclude.some(pattern => file.includes(pattern))) continue

        const filePath = join(distDir, file)
        const origSize = (await stat(filePath)).size
        const name = basename(file, ext)
        const resized = sharp(filePath).resize(maxWidth, null, { withoutEnlargement: true })

        // Generate AVIF
        const avifBuf = await resized.clone().avif({ quality: avifQuality }).toBuffer()
        await writeFile(join(distDir, name + '.avif'), avifBuf)

        // Generate WebP
        const webpBuf = await resized.clone().webp({ quality: webpQuality }).toBuffer()
        await writeFile(join(distDir, name + '.webp'), webpBuf)

        console.log(`  ${file} (${(origSize / 1024).toFixed(1)}kB) → .avif (${(avifBuf.length / 1024).toFixed(1)}kB) / .webp (${(webpBuf.length / 1024).toFixed(1)}kB)`)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    imageOptimize({ avifQuality: 70, webpQuality: 75, exclude: ['favicon'] }),
  ],
})
