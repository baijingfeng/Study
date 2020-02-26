/*
 * @Author: your name
 * @Date: 2020-01-21 14:04:59
 * @LastEditTime : 2020-01-22 13:54:36
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeJsStudy/mongoose-demo/index.js
 */
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/bai', {useNewUrlParser: true})

const Schema = mongoose.Schema

// 设计集合结构
const userSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	email: String
})

// 将文档结构发布为模型
// 将一个架构发布为 model
// 第一个参数: 传入一个大写名词为集合名称, users集合名称
// 第二个参数: 架构 Schema
// 返回值:　模型构造函数
const User = mongoose.model('User', userSchema)

const admin = new User({
  username: 'admin',
  password: '123456',
  email: 'admin@admin.com'
})

admin.save().then(() => console.log('保存成功'))

User.find()