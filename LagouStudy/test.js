let a = 10
var obj = {
	a: 100,
	pro: {
		a: 1000,
		getpro: () => {
			console.log(this.a)
		},
	},
}
obj.pro.getpro()

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
bar() //3
