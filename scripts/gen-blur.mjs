import fs from 'fs'
import path from 'path'
import { getPlaiceholder } from 'plaiceholder'

const imagesDir = path.join(process.cwd(), 'public/images')
const blurMap = {}

const mappingName = 'img-blur.map.json'
const mappingsDirName = 'mappings'

async function walk(dir) {
  const entries = fs.readdirSync(dir)

  for (const entry of entries) {
    const fullPath = path.join(dir, entry)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      await walk(fullPath) // recurse into subdirectory
    } else if (/\.(jpe?g|png|webp|avif|svg)$/i.test(entry)) {
      const buffer = fs.readFileSync(fullPath)
      const { base64 } = await getPlaiceholder(buffer)

      // Constructing the URL path relative to /public
      // e.g. fullPath = /path/to/public/images/about/photo.jpg
      const relativePath = fullPath
        .replace(path.join(process.cwd(), 'public'), '')
        .replace(/\\/g, '/') // Windows fix

      blurMap[relativePath] = base64
    }
  }
}

await walk(imagesDir)

// Map generator
async function genMapping() {
  fs.writeFileSync(`${mappingsDirName}/${mappingName}`, JSON.stringify(blurMap, null, 2))
  console.log(`✓ Generated \`${mappingName}\` with ${Object.keys(blurMap).length} entries`)
}

// Checking for the `mappings` folder
try {
  if (!fs.existsSync(mappingsDirName)) {
    fs.mkdirSync(mappingsDirName, { recursive: true }, (err) => {
      if (err) throw new Error(err)
    })
    console.log(`✓ Created new \`${mappingsDirName}\` directory`)
  }

  await genMapping()

} catch (err) { console.error('Error creating directory or mapping: ', err) }

console.log('')