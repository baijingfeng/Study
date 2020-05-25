const test = 1

const getIndex = () => {
	return 4
}

enum Status {
	Uploading = 1,
	Success = getIndex(),
	Failed = 5,
}

console.log(Status.Uploading)
console.log(Status['Success'])

enum Message {
	Error = 'sorry',
	Success = 'Sucessed',
	Failed = Error,
}

console.log(Message.Success)

// 异构枚举
enum Result {
	Failed = 0,
	Success = 'success',
}

// 枚举可以作为类型使用: 1. 不带初始值的枚举; 2. 值为字符串字面量; 3. 值为数值字面量
enum Animals {
	Dog = 1,
	Cat = 2,
}

interface Dog {
	type: Animals.Dog
}

// const dog: Dog = {
// 	type: Animals.Cat,
// }


enum Status {
  Off,
  On,
}

interface Light {
  status: Status
}

// const light: Light = {
//   status: Animals.Dog
// }

// 不会编译js中真实存在的对象, 仅用于提高代码可读性
const enum Animals1 {
  Dog = 1,
}