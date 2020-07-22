function findValue(obj) {
  var stack = []

  stack.push(...Object.entries(obj))

  while (stack.length) {
    var item = stack.shift()

    if (typeof item[1] !== 'object' && item[1] === 1) {
      console.log(`${item[0]} : ${item[1]}`) 
    } else {
      stack.push(...Object.entries(item[1]))
    }
  }
}

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
      B: 9,
      D: 1
    }
  }
}]

arr.forEach((e, i) => {
  findValue(e)
})