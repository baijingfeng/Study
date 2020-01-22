/*
 * @Author: your name
 * @Date: 2020-01-21 16:14:16
 * @LastEditTime : 2020-01-21 16:29:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeJsStudy/promise-demo/index.js
 */
const fs = require('fs')

const p1 = new Promise((resolve, reject) => {
	fs.readFile('./data/a.txt', 'utf8', (err, data) => {
		if (err) {
			reject(err)
		} else {
      console.log('p1')
			resolve(data)
		}
	})
})

const p2 = new Promise((resolve, reject) => {
	fs.readFile('./data/b.txt', 'utf8', (err, data) => {
		if (err) {
			reject(err)
		} else {
      console.log('p2')
			resolve(data)
		}
	})
})

const p3 = new Promise((resolve, reject) => {
	fs.readFile('./data/c.txt', 'utf8', (err, data) => {
		if (err) {
			reject(err)
		} else {
      console.log('p3')
			resolve(data)
		}
	})
})

p1.then(data => {
	console.log(data)
	return p2
})
	.then(data => {
		console.log(data)
		return p3
	})
	.then(data => console.log(data))
