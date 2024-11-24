/**
 * 压缩svg图片
 * 项目根目录执行脚本：npm run compress-svg
 */

import { readdir, readFile, writeFile } from 'node:fs'
import * as path from 'node:path'
import { type Config, optimize } from 'svgo'

// 需要处理的svg目录
const relativeSvgDirectories: string[] = [
  'src/.vuepress/public/assets/websites',
]
// 指定要忽略的文件
const ignoreFiles: string[] = []
// 指定忽略的目录
const ignoreDirectoriesRelative: string[] = []

const config: Config = {
  multipass: true, // 多次压缩
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false, // 保留 viewBox属性
        },
      },
    },
  ],
}

function isIgnoreFile(filePath: string) {
  const fileName = path.basename(filePath)
  return (
    ignoreFiles.includes(fileName)
    || ignoreDirectoriesRelative.some(s => filePath.includes(s))
  )
}

function compressAndReplace(filePath: string) {
  // 读取SVG文件内容
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('❌Error reading file:', err)
      return
    }

    // 使用svgo进行压缩
    const result = optimize(data, { path: filePath, ...config })
    // 覆盖原始文件
    writeFile(filePath, result.data, (err) => {
      if (err) {
        console.error('❌Error writing file:', err)
      }
      else {
        console.log(`✅Successfully compressed and replaced: ${filePath}`)
      }
    })
  })
}

function processDirectory(inputDirectory: string, directoryPath: string) {
  // 读取指定目录下的所有文件和子目录
  readdir(directoryPath, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error('❌Error reading directory:', err)
      return
    }

    // 遍历每个文件或子目录
    entries.forEach((entry) => {
      const entryPath = path.join(directoryPath, entry.name)

      if (isIgnoreFile(entryPath)) {
        // 如果文件或目录在忽略列表中，则跳过处理
        console.log(`🟡Ignoring: ${entryPath}`)
        return
      }

      if (entry.isDirectory()) {
        // 如果是子目录，则递归处理子目录
        processDirectory(inputDirectory, entryPath)
      }
      else if (entry.isFile() && entry.name.endsWith('.svg')) {
        // 如果是SVG文件，则进行压缩并覆盖原文件
        compressAndReplace(entryPath)
      }
    })
  })
}

// 获取当前脚本的执行路径
const scriptDirectory = process.cwd()

// 将相对路径的输入目录转换为绝对路径
const inputDirectories = relativeSvgDirectories.map(dir =>
  path.join(scriptDirectory, dir),
)

// 开始处理多个目录
inputDirectories.forEach((inputDirectory) => {
  processDirectory(inputDirectory, inputDirectory)
})
