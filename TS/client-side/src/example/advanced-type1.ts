/** 交叉类型 */

const mergeFunc = <T, U>(arg1: T, arg2: U): T & U => {
	let res = {} as T & U
	res = Object.assign(arg1, arg2)

	return res
}

mergeFunc({a: 'a'}, {b: 'b'})

/** 联合类型 */

const getLength1 = (content: string | number): number => {
	if (typeof content === 'string') {
		return content.length
	} else {
		return content.toString().length
	}
}

/** 类型保护 */
const valueList = [123, 'abc']

const getRandomValue = () => {
	const number1 = Math.random() * 10
	if (number1 < 5) {
		return valueList[0]
	} else {
		return valueList[1]
	}
}

const item = getRandomValue()

// function isString(value: number | string): value is string {
//   return typeof value === 'string'
// }

// number, string, boolean, symbol中的一种
if (typeof item === 'string') {
	console.log(item.length)
} else {
	item.toFixed()
}

// instanceof 类型保护

class CreatedByClass1 {
	public age = 18
	constructor() {}
}

class CreatedByClass2 {
	public name = 'lison'
	constructor() {}
}

function getRandomItem() {}

// null 和 undefined 是任何类型的子类型

let value2 = '23'

// 类型断言, num!, !表示不为null(去除null)

/** 类型别名 */

// 类型别名可以在对象属性中引用自身

// 类型别名和接口有时可以起到同样的作用, 类型兼容
// 需要拓展时用接口, 联合类型等用别名

// 字面量类型
type Name = 'Lision'

const name4: Name = 'Lision'
