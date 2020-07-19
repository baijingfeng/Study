/* var a = 10
var obj = {
	a: 100,
	pro: (function () {
		return {
			a: 1000,
			getpro: () => {
				console.log(this.a)
			},
		}
	})(),
}

obj.pro.getpro()

console.log('global', global)
var a = {n: 1}
var b = a
a.x = a = {n: 2}
console.log(a.x)
console.log(b.x)

var obj = {
	name: 'noshower',
	sayName: function () {
		var a = () => this.name
		console.log(a()) // noshower
	},
}
var name = 'bar'
var b = obj.sayName

b()

var length = 10
function fn() {
	console.log(this.length)
}

var obj = {
	length: 5,
	method: function (fn) {
		console.log(this.length)
		fn()
		console.log('arguments', arguments[0])
		arguments[0]()
	},
}

obj.method(fn, 1) */

/* function a(xx) {
	this.x = xx
	return this
}

var x = a(5)

var y = a(6)

var a = {n: 1}
var b = a
a.x = a = {n: 2}
console.log(a.x)
console.log(b.x)

function foo() {
	var self = this
	return function () {
		console.log(self.a)
	}
}

var a = 2

var obj = {
	a: 3,
	foo: foo,
}

var bar = obj.foo()
bar() //3var obj = {
  name: 'noshower',
  sayName: function() {
      var a = () => this.name;
      console.log(a()); // noshower
  }
}
var name = 'bar';
var b = obj.sayName;

b()
console.log(x.x)
console.log(y.x) */

