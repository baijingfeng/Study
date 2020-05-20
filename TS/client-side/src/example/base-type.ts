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

console.log('str', str)

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

console.log('Roles', Roles.USER)

console.log('Roles[3]', Roles[3])