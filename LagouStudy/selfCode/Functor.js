// Functor 函子
class Container {
	static of(value) {
		return new Container(value)
	}
	constructor(value) {
		this._value = value
	}

	map(fn) {
		return Container.of(fn(this._value))
	}
}

// Container.of = function(value) {
//   return new Container(value)
// }

const result = Container.of(5)
	.map((x) => x + 1)
	.map((x) => x * x)

console.log('result', result)

class Maybe extends Container {
	static of(value) {
		return new Maybe(value)
	}
	map(fn) {
		return this._value ? Maybe.of(fn(this._value)) : Maybe.of(null)
	}
}

const testMaybe = Maybe.of(undefined).map((v) => v.toUpperCase())
console.log('testMaybe', testMaybe)

class Either {
	static of(left, right) {
		return new Either(left, right)
	}
	constructor(left, right) {
		this.left = left
		this.right = right
	}

	map(fn) {
		return this.right ? Either.of(this.left, fn(this.right)) : Either.of(fn(this.left), this.right)
	}
}
