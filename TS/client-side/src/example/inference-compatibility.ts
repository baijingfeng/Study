// 类型推断 和 类型兼容性

let name3 = 'fds'

// name3 = 2

let arr4 = [1, 'fs']

// arr4 = [false]

// 上下文类型
// window.onmousedown = (mouseEvent: MouseEvent) => {
//   console.log(mouseEvent.preventDefault)
// }

/** 类型兼容性 */
interface InfosInf {
	name: string
	info: {
		age: number
	}
}

let infos: InfosInf

const infos0 = {
	name: 'zhangsan ',
	info: {
		age: 2,
	},
}
const infos1 = {age: 18}

const infos2 = {
	name: 'fsd',
	info: {
		age: 2,
		name: '',
	},
	age: 14,
}

infos = infos0

infos = infos2 // 类型兼容

/** 函数兼容性 */

// 参数个数
// let x = (a: number) => 0

// let y = (b: number, c: string) => 0

// y = x // 类型兼容
// x = y // error

// 参数类型

// let x = (a: number) => 0
// let y = (b: string) => 0

// x = y

// 可选参数和剩余参数

// 函数参数双向协变
let funcA = (arg: number | string): void => {}

let funcB = (arg: number): void => {}

// funcA = funcB
funcB = funcA

// 返回值类型
let x = (): string | number => 0

let y = (): string => 's'

x = y

// y = x

// 函数重载
function merge(arg1: number, arg2: number): number

function merge(arg1: string, arg2: string): string

function merge(arg1: any, arg2: any) {
	return arg1 + arg2
}

merge(1, 2)

merge('fs', '1')

let func = merge

/** 枚举兼容性 */


enum Status1 {
	On,
	Off,
}

enum AnimalEnum {
  Dog,
  Cat,
}

let st = Status1.Off

st = 5 // 和数值类型兼容
// st = AnimalEnum.Dog // 彼此之间不兼容


/** 类的兼容性 */

// private 和 protected 会对兼容性造成影响
