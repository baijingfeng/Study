const http = require('http')

const app = http.createServer()

app.on('request', (req, res) => {
  console.log(req.method)
  if (req.method == 'POST') {
    res.end('post')
  } else if (req.method == 'get') {
    res.end('get')
  } 

  res.end('111')
})

app.listen(3000)

console.log('创建网络服务器成功')