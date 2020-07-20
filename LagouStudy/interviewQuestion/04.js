new Promise(function (resolve, reject) { // P1
  console.log("AAAA")
  resolve()
}).then(function() { // thenA1
  new Promise(function (resolve, reject) { //thenA1p
    console.log("BBBB")
    resolve()
  }).then(function() { // thenA11
    console.log("CCCC")
  }).then(function() { // thenA12
    new Promise(function(resolve, reject) { // thenA12p
      console.log("DDDD")
      resolve()
    }).then(function() { // thenA121
      console.log("EEEE")
    }).then(function() { // thenA122
      console.log("FFFF")
    })
    console.log("GGGG")
  })

  console.log("HHHH")
}).then(function() { // thenA2
  console.log("TTTT")
})

new Promise(function(resolve, reject) { // P2
  console.log("JJJJ")
  resolve()
}).then(function() { // thenB1
  console.log("KKKK")
}).then(function() { // thenB2
  console.log("LLLL")
})
// A -> J -> B -> H -> K -> C -> T -> L -> D -> G -> E -> F
// 回调放入微任务队列的顺序以及时机: 
// 执行P1(输出A) -> 微(thenA1) -> 执行P2(输出J) -> 微(thenA1-thenB1) ->
// -> 执行thenA1 -> 执行thenA1p(输出B) -> 微(thenB1-thenA11) ->
// -> 继续执行thenA1(输出H) -> 微(thenB1-thenA11-thenA2) -> 
// -> 执行thenB1(输出K) -> 微(thenA11-thenA2-thenB2) -> 
// -> 执行thenA11(输出C) -> 微(thenA2-thenB2-thenA12) -> 
// -> 执行thenA2(输出T) -> 微(thenB2-thenA12) ->
// -> 执行thenB2(输出L) -> 微(thenA12) ->
// -> 执行thenA12 -> 执行thenA12P(输出D) -> 
// -> 微(thenA121) -> 继续执行thenA12(输出G) ->
// -> 执行thenA121(输出E) -> 微(thenA122) ->
// -> 执行thenA122(输出F) -> 程序结束