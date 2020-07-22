const get = function() {
  const that = this
  console.log(that)
  return new Promise(() =>  {
    console.log(that === this)
    console.log('this', this)
  })
}

const obj = {
  a: 1,
  b: 2,
  get
}

get()

obj.get()