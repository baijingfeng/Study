/* const _ = require('lodash')

let array = [1, 2, 3]

const arr = _.reverse(array)

console.log('arr', arr)

console.log('array', array)

Promise.resolve({
  then: function() {

  }
})

Promise.reject('anything') */


/* Promise.all([
  ajax('/api/user.json'),
  ajax('/api/user.json'),
  ajax('/api/user.json'),
  ajax('/api/user.json'),
])
  .then(() => {}) */

/* Promise.race([ // ajax 超时控制
  ajax('/api/user.json'),
  ajax('/api/user.json'),
  ajax('/api/user.json'),
  ajax('/api/user.json'),
])
  .then(() => {}) */

// 微任务 和 宏任务


/* function * foo() {
  console.log('start')

  const res = yield 'foo'
  console.log(res)
}

const generator = foo()

const result = generator.next()

console.log('result', result) */


/* Promise 方式的 AJAX

function ajax (url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.responseType = 'json'
    xhr.onload = function () {
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    xhr.send()
  })
}

function* main() {
  const users = yield ajax('/api/users.json')
  console.log('users', users)

  const posts = yield ajax('/api/posts.json')
  console.log('posts', posts)
}

const g = main()

const result = g.next()

result.value.then(data => {
  const result2 = g.next(data)

  if (result2.done) return 

  result2.value.then(data => {
    g.next(data)
  })
}) */

function p1 () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p1')
    }, 2000)
  })
}
function p2 () {
  return new Promise(function (resolve, reject) {
    // reject('失败')
    resolve('p2 成功');  
  })
}

p2()
  .finally(() => {
    console.log("finally......")
    return p1()
  })
  .then(value => console.log(value))
  