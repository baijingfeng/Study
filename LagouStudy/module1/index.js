// const MyPromise = require('./MyPromise')
import MyPromise from './MyPromise.js'

let p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})

p.then(v => {
    console.log(v);
})