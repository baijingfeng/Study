// 布尔类型
let bool: boolean
bool = false

// 数值类型
let num: number
num = 1
num = 0x123

num = 0b01010

num = 0o234

num = 0o23

// 字符串类型
let str: string
str = 'abc'

str = `fsd${num}`

// console.log('str', str)

// 数组类型
let arr: number[]

arr = [1, 2]

let arr2: Array<number | string>

arr2 = ['fs', 2]

let arr3: (string | number | boolean)[]

arr3 = [false, 1]

// 元组类型
let tuple: [string, number, boolean]

tuple = ['f', 2, true]

// 枚举类型
enum Roles {
	SUPER_ADMIN = 1,
	ADMIN = 3,
	USER = 'sfd',
}

// console.log('Roles', Roles.USER)

// console.log('Roles[3]', Roles[3])

//any类型
let value: any

value = 1
value = {}

// void类型
const consoleText = (text: string): void => {
	console.log('text', text)
}

let v: void

v = undefined

// null , undefined类型
let u: undefined
u = undefined

let n: null
n = null

// never类型
const errorFunc = (message: string): never => {
	throw new Error(message)
}

const infiniteFunc = (): never => {
	while (true) {}
}

let neverVariable = (() => {
	while (true) {}
})()

num = neverVariable // 说明可以将never类型赋值给number类型

// object类型
let obj = {
	name: 'fs',
}

function getObject(obj: object): void {
	console.log('obj', obj)
}

getObject({s: 'fds '})

// 类型断言
const getLength = (target: string | number): number => {
	if ((target as string).length || (<string>target).length === 0) {
		return (<string>target).length
	} else {
		return target.toString().length
	}
}

getLength('fda ')