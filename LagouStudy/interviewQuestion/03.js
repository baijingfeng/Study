new Promise(resolve => {
	console.log(1)
	resolve()
})
	.then(() => console.log(11))
	.then(() => console.log(12))
	.then(() => console.log(13))

new Promise(resolve => {
	console.log(2)
	resolve()
})
	.then(() => console.log(21))
	.then(() => console.log(22))
	.then(() => console.log(23))

console.log(3)

new Promise((resolve, reject) => {
  console.log("log: 外部promise");
  resolve();
})
  .then(() => {
    console.log("log: 外部第一个then");
    new Promise((resolve, reject) => {
      console.log("log: 内部promise");
      resolve();
    })
      .then(() => {
        console.log("log: 内部第一个then");
      })
      .then(() => {
        console.log("log: 内部第二个then");
      });
  })
  .then(() => {
    console.log("log: 外部第二个then");
  });
  
// log: 外部promise
// log: 外部第一个then
// log: 内部promise
// log: 内部第一个then
// log: 外部第二个then
// log: 内部第二个then

// 注册(存储)是同步的; 推入微任务异步的,是resolve的工作;