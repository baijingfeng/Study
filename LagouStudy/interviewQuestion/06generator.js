function* async1() {
	console.log('AAAA')
	const generator = async2()
	yield generator.next()

	console.log('BBBB')
}

function* async2() {
	console.log('CCCC')
}

console.log('DDDD')

setTimeout(function () {
	console.log('FFFF')
}, 0)

// async1()
const generator = async1()
generator.next()
generator.next()

new Promise(function (resolve) {
	console.log('GGGG')
	resolve()
}).then(function () {
	console.log('HHHH')
})

console.log('IIII')
