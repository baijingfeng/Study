const fs = require('fs')

const path = './wwwroot'

let dirArr = []

fs.readdir(path, async (err, files) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(files)
  for (let file of files) {
    await fs.stat(`${path}/${file}`, (err, stats) => {
      if(stats.isDirectory()) {
        dirArr.push(file)
      }
    })
  }

  console.log(dirArr)
})

