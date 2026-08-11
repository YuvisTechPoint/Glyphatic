import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

function getAllFiles(dir, extArray, fileList = []) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, extArray, fileList)
    } else {
      if (extArray.includes(path.extname(file))) {
        fileList.push(filePath)
      }
    }
  }
  return fileList
}

const componentFiles = getAllFiles(path.join(root, 'components'), ['.tsx', '.ts'])
const allCodeFiles = [
  ...getAllFiles(path.join(root, 'app'), ['.tsx', '.ts']),
  ...componentFiles,
  ...getAllFiles(path.join(root, 'lib'), ['.ts'])
]

const unused = []

for (const comp of componentFiles) {
  const baseName = path.basename(comp, path.extname(comp))
  if (baseName === 'index') continue

  let isUsed = false
  for (const codeFile of allCodeFiles) {
    if (codeFile === comp) continue
    const content = fs.readFileSync(codeFile, 'utf8')
    if (content.includes(baseName)) {
      isUsed = true
      break
    }
  }

  if (!isUsed) {
    unused.push(comp)
  }
}

console.log('Unused components:')
unused.forEach(u => console.log(u))
