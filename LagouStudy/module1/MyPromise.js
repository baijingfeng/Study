const PENDING = 'pending'
const FUlFILLED = 'fulfilled'
const REJECT = 'reject'
class MyPromise {
	status = PENDING // 状态
	value = undefined // 成功的值
	err = undefined // 失败的原因

	successCallback = [] // 用数组支持多个回调
	failCallback = []
	constructor(fn) {
		fn(this.resovle, this.reject)
	}
	resovle = val => {
		if (this.status !== PENDING) return

		this.status = FUlFILLED
		this.value = val

		while (this.successCallback.length) {
			this.successCallback.shift()(this.value)
		}
	}
	reject = err => {
		if (this.status !== PENDING) return

		this.status = REJECT
		this.err = err

		while (this.failCallback.length) {
			this.failCallback.shift()(this.value)
		}
	}
	then(successCallback, failCallback) {
		if (this.status === FUlFILLED) {
			successCallback(this.value)
		} else if (this.status === REJECT) {
			failCallback(this.err)
		} else {
			this.successCallback.push(successCallback)
			this.failCallback.push(failCallback)
		}
	}
}

// export default MyPromise
// module.exports = MyPromise
let p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})

p.then(v => {
    console.log(v);
})
