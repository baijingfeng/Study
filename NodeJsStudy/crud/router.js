/*
 * @Author: your name
 * @Date: 2020-01-20 11:39:45
 * @LastEditTime : 2020-01-20 15:09:59
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /NodeJsStudy/crud/router.js
 */
const fs = require('fs')
const express = require('express')

const Student = require('./student')

const router = express.Router()

router.get('/students', (req, res) => {
	Student.find((err, students) => {
		if (err) {
			return res.status(500).send('Server error.')
		}

		res.render('index.html', {
			fruits: ['苹果', '香蕉', '橘子', '柠檬'],
			students: students
		})
	})
})

router.get('/students/new', (req, res) => {
	res.render('new.html')
})

router.post('/students/new', (req, res) => {
	Student.save(req.body, err => {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.redirect('/students')
	})
})

router.get('/students/edit', (req, res) => {
	Student.findById(parseInt(req.query.id), (err, student) => {
		if (err) {
			return res.status(500).send('Server error.')
		}
		res.render('edit.html', {
			student
		})
	})
})

router.post('/students/edit', (req, res) => {
	Student.updateById(req.body, err => {
    if (err) {
      return res.status(500).send('Server error.')
    } 

    res.redirect('/students')
  })
})

router.post('/students/delete', (req, res) => {
	fs.readFile('./db.json', 'utf8', (err, data) => {
		if (err) {
			return res.status(500).send('Server error.')
		}

		const students = JSON.parse(data).students

		res.render('index.html', {
			fruits: ['苹果', '香蕉', '橘子', '柠檬'],
			students: students
		})
	})
})

module.exports = router
