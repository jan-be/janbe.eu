import { build } from 'vite'
import { readFileSync, writeFileSync, unlinkSync, readdirSync } from 'fs'
import { resolve, join } from 'path'
import { pathToFileURL } from 'url'

const root = resolve(import.meta.dirname)

// 1. Client build (CSS + assets + image optimization)
await build({ root })

// 2. SSR build (renders React to static HTML)
await build({
  root,
  build: {
    ssr: true,
    rollupOptions: { input: resolve(root, 'src/entry-server.jsx') },
    outDir: 'dist-ssr',
  },
  plugins: [], // no image plugin for SSR build
})

// 3. Load the SSR module and render
const ssrModule = pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href
const { render } = await import(ssrModule)
const appHtml = render()

// 4. Read the client-built index.html (has CSS links)
const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')

// 5. Inject rendered HTML, remove JS bundle, add email deobfuscation
const email = 'jan@janbe.eu'
const encoded = Buffer.from(email).toString('base64')

const deobfuscateScript = `<script>
(function(){var d=document.querySelectorAll('[data-email]');var e=atob('${encoded}');d.forEach(function(el){el.href='mailto:'+e;var v=el.querySelector('.contact-value');if(v)v.textContent=e;});})();
</script>`

const html = template
  .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
  .replace(/<script type="module"[^>]*><\/script>\n?/, '')
  .replace('</body>', `${deobfuscateScript}\n</body>`)

writeFileSync(resolve(root, 'dist/index.html'), html)

// 6. Remove unused JS bundle
const assetsDir = join(root, 'dist', 'assets')
for (const file of readdirSync(assetsDir)) {
  if (file.endsWith('.js')) unlinkSync(join(assetsDir, file))
}

console.log('\nStatic HTML generated successfully.')
console.log('Email obfuscated with base64 encoding (decoded client-side).')
