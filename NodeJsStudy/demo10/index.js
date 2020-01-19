const express = require('express')

const bodyParser = require('body-parser')

const app = express()

app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'))

// 配置body-parser中间件
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.render('404.html')
})

app.get('/admin', (req, res) => {
	res.render('admin/index.html', {
		title: 'bai'
	})
})

app.get('/product', (req, res) => {
	res.send('你好呀')
})

app.get('/about', (req, res) => {
	res.send('这么6')
})

app.listen(3000, () => {
	console.log('server is running!')
})
