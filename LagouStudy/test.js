var a = 10 ; 
var obj = { 
  a : 100 , 
  pro : { 
    getpro : () => {
      console.log(this)
    },
  }
}
obj.pro.getpro()

var a = {n: 1}
var b = a
a.x = a = {n: 2}
console.log(a.x)
console.log(b.x)