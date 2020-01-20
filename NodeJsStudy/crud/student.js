/**
 * student.js
 * 数据操作文件模块
 * 职责: 操作文件中的数据, 只处理数据, 不关心业务
 */

const fs = require('fs')

const dbPath = './db.json'

exports.find = function(callback) {
	fs.readFile(dbPath, 'utf8', (err, data) => {
		if (err) {
			return callback(err)
		}
		callback(null, JSON.parse(data).students)
	})
}

exports.findById = function (id, callback) {
  fs.readFile(dbPath, 'utf8', (err, data) => {
		if (err) {
			return callback(err)
    }
    
    const students = JSON.parse(data).students
    const student = students.find(item => item.id === id)

		callback(null, student)
	})
}

exports.save = function(student, callback) {
	fs.readFile(dbPath, 'utf8', (err, data) => {
		if (err) {
			return callback(err)
		}

		const students = JSON.parse(data).students

		students.push({id: students[students.length - 1].id + 1, ...student})

		const fileData = JSON.stringify({
			students
		})

		fs.writeFile(dbPath, fileData, err => {
			if (err) {
				return callback(err)
			}
			callback(null)
		})
	})
}

exports.updateById = function(student, callback) {
	fs.readFile(dbPath, 'utf8', (err, data) => {
		if (err) {
			return callback(err)
		}

		const students = JSON.parse(data).students

		const stu = students.find(item => item.id === student.id)

		for (key in stu) {
      stu[key] = student[key] || stu[key]
    }

		const fileData = JSON.stringify({
			students
		})

		fs.writeFile(dbPath, fileData, err => {
			if (err) {
				return callback(err)
			}
			callback(null)
		})
	})
}

exports.delete = function() {}
