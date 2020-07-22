// 1
function Foo() {
  for (var i = 0; i < 5; i++) {
    setTimeout(function timer() {
      console.log(i)
    }, 1000)
  }
  console.log(i)
}
Foo()

// 2
function Foo() {
  for (var i = 0; i < 5; i ++) {
    (function(i) {
      setTimeout(function timer() {
        console.log(i)
      }, 1000)
    })(i)
  }
  console.log(i)
}
Foo()

// 3
setTimeout(function () {
  console.log('BBBB')
}, 1000)

console.log('CCCC')

setTimeout(function () {
  console.log('DDDD')
}, 0)

// 4
setTimeout(function () {
  console.log('BBBB')
}, 1000)
const start = new Date()
while (new Date() - start < 3000) {}
console.log('CCCC')
setTimeout(function () {
  console.log('DDDD')
}, 0)
