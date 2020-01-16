const http = require("http")

const server = http.createServer()

server.on("request", (request, response) => {
	console.log("收到客户端的请求!")
	console.log(`请求路径是${request.url}`)

	// response.write('hello')
	// response.write(' nodejs')

	const url = request.url

	if (url === "/products") {
		const products = [
			{
				name: "小米 6",
				price: 3000
			},
			{
				name: "小米 5",
				price: 3000
			},
			{
				name: "小米 10",
				price: 3000
			}
    ]
    
    response.end(JSON.stringify(products))
	} else {
    response.end('404')
  }

	
})

server.listen(3000, () => {
	console.log("服务器启动成功!")
})
