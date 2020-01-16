var fs = require('fs')

/* fs.stat('./package.json', (err, stats) => {
  if(err) {
    console.log(err)
    return
  }

  console.log(`是文件: ${stats.isFile()}`)
  console.log(`是目录: ${stats.isDirectory()}`)

}) */

/* fs.mkdir('./css', (err) => {
  if(err) {
    console.log(err)
    return
  }

  console.log('创建成功')
}) */

/* fs.writeFile('./html/index.html', '你好呀', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('创建写入文件成功')
}) */

/* fs.appendFile('./css/base.css', '\nh2{color:red}', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('追加文件成功')
}) */

/* fs.readFile('./html/index.html', (err, data) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(data.toString())
}) */

/* fs.readdir('./html', (err, files) => {
  if (err) {
    console.log(err)
    return
  }

  console.log(files)
}) */

/* fs.rename('./css/aaa.css', './css/index.css', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('重命名成功')
}) */

/* fs.rename('./css/base.css', './html/index.css', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('移动文件成功')
}) */

fs.rmdir('./aaa', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('删除目录成功')
})

/* fs.unlink('./aaa/index.html', (err) => {
  if (err) {
    console.log(err)
    return
  }

  console.log('删除文件成功')
}) */