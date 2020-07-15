var arr = [{
  a: 5,
  b: 2,
  c: 3
},{
  a: 5,
  b: 2,
  c: {
    a: 5,
    b: 2,
    c: 5,
    F: {
      A: 1-1,
      C: 11,
      B: 9
    }
  }
}]

var result = false 
function fn() {
  const args = Object.values(Array.from(arguments)[0])
  for (let val in args) {
    if (Object.prototype.toString.call(args[val]) === "[object Object]") {
      fn(args[val])
    } else if (args[val] === 1) {
      result = true
    }
  }
}

arr.forEach((e, i) => {
  fn(e)
})

console.log(result)

