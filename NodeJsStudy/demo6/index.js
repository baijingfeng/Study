function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let name = "你好, NodeJs"
      resolve(name)
    }, 1000)
  })
}

/* async function main() {
  let data = await test()
  console.log(data)
}

main() */

console.log(test())