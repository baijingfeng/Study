// IO函子
const fs = require('fs')
const fp = require('lodash/fp')

class IO {
	static of(value) {
		return new IO(function () {
			return value
		})
	}

	constructor(fn) {
		this._value = fn
	}

	map(fn) {
		return new IO(fp.flowRight(fn, this._value))
	}

	join() {
		return this._value()
	}

	flatMap(fn) {
		return this.map(fn).join()
	}
}

// 调用
// const r = IO.of(process).map(p => p.execPath)
// console.log('r', r._value())

const readFile = function (filename) {
	return new IO(function () {
		return fs.readFileSync(filename, 'utf-8')
	})
}

const print = function (x) {
	return new IO(function () {
		console.log(x)
		return x
	})
}

/* const cat = fp.flowRight(print, readFile)

let r = cat('package.json')

console.log(r._value()._value()) */

let r = readFile('package.json').map(fp.toUpper).flatMap(print).join()
// console.log(r)
