const mongoose = require('mongoose')
const express = require('express')
var cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const Data = require('./data')

const API_PORT = 3001
const app = express()

app.use(cors())
const router = express.Router()

const dbRoute = 'mongodb+srv://timmybai:050802@cluster0-j3bus.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(dbRoute, {
	useNewUrlParser: true
})

let db = mongoose.connection

db.once('open', () => console.log('connected to the database'))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//（可选）仅用于记录和
// bodyParser，将请求体解析为可读的json格式
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(logger('dev'))

//这是我们的get方法
//此方法获取数据库中的所有可用数据
router.get('/getData', (req, res) => {
	Data.find((error, data) => {
		if (error) {
			return res.json({success: false, error})
		}

		return res.json({success: true, data})
	})
})


//这是我们的更新方法
//此方法会覆盖数据库中的现有数据
router.post('/updateData', (req, res) => {
	const {id, update} = req.body
	Data.findByIdAndUpdate(id, update, error => {
		if (error) {
			return res.json({success: false, error})
		}

		return res.json({success: true})
	})
})

//这是我们的删除方法
//此方法删除数据库中的现有数据
router.delete('/deleteData', (req, res) => {
	const {id} = req.body
	Data.findByIdAndRemove(id, error => {
		if (error) {
			return res.send(error)
		}

		return res.json({success: true})
	})
})

router.post('/putData', (req, res) => {
	let data = new Data()

	const {id, message} = req.body

	if ((!id && id !== 0) || !message) {
		return res.json({
			success: false,
			error: 'INVALID INPUTS'
		})
	}

	data.message = message
	data.id = id
	data.save(error => {
		if (error) {
			return res.json({
				success: false,
				error
			})
		}

		return res.json({success: true})
	})
})

// 为我们的http请求添加'/api'
app.use('/api', router)

// 将我们的后端发送到端口
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`))
