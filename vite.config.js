import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sharp from 'sharp'
import { readdir, stat, unlink, writeFile } from 'fs/promises'
import { join, extname, basename } from 'path'

function imageToAvif({ quality = 55, maxWidth = 1200, exclude = [] } = {}) {
  return {
    name: 'image-to-avif',
    apply: 'build',
    async closeBundle() {
      const distDir = join(process.cwd(), 'dist')
      const files = await readdir(distDir)
      const imageExts = ['.jpg', '.jpeg', '.png', '.webp']
      let totalSaved = 0

      for (const file of files) {
        const ext = extname(file).toLowerCase()
        if (!imageExts.includes(ext)) continue
        if (exclude.some(pattern => file.includes(pattern))) continue

        const filePath = join(distDir, file)
        const origSize = (await stat(filePath)).size
        const avifBuf = await sharp(filePath)
          .resize(maxWidth, null, { withoutEnlargement: true })
          .avif({ quality })
          .toBuffer()
        const avifPath = join(distDir, basename(file, ext) + '.avif')

        await writeFile(avifPath, avifBuf)
        await unlink(filePath)

        const saved = origSize - avifBuf.length
        totalSaved += saved
        const pct = ((saved / origSize) * 100).toFixed(0)
        console.log(`  ${file} (${(origSize / 1024).toFixed(1)}kB) → ${basename(avifPath)} (${(avifBuf.length / 1024).toFixed(1)}kB) -${pct}%`)
      }

      if (totalSaved > 0) {
        console.log(`\n  Total savings: ${(totalSaved / 1024).toFixed(1)}kB`)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    imageToAvif({ quality: 55, exclude: ['favicon'] }),
  ],
})
