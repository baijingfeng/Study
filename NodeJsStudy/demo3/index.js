const fs = require('fs')

const path = './upload'

const mkdir = (path) => {
  fs.mkdir(path, (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log(`创建目录${path}成功`)
  })
}

fs.stat(path, (err, stats) => {
  if (err) {
    mkdir(path)
    return
  }

  if (stats.isDirectory()) {
    console.log(`目录${path}已经存在`)
  } else {
    console.log(`存在文件${path}\n开始删除文件${path}...`)
    fs.unlink(path, (err) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(`删除文件${path}成功\n开始创建目录${path}...`)
      mkdir(path)
    })
  }
})