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

/** 可辨识联合 */

/** this */

/** 索引类型 keyof */

/**
 *  索引访问操作符
 *  [], 取到对应的类型
 *  keyof,非never, undefined, null
 *  两者可结合使用
 */

/** trailing
 *  映射类型
 *  [P in keyof T]
 *  内置Readonly, Partial
 *  内置映射类型, Pick
 *  内置映射类型, Record
 *  同态
 */

/** 映射类型推断, 包装 */

/** 增加删除修饰符, + - */

/**
 * unknown
 * 1. 任何类型都可以赋值给unknown类型
 * 2. 如果没有类型断言或者基于控制流的类型细化时, unknown不可赋值给其他类型, 只能赋值给unknown和any类型
 * 3. 如果没有类型断言或者基于控制流的类型细化时, 不能在它上面进行任何操作
 * 4. unknown与任何其他类型组成的交叉类型, 最后都等于其他类型
 * 5. unknown与任何其他类型组成的联合类型(除了any是any), 都等于unknown类型
 * 6. never类型是unknown类型的子类型
 * 7. keyofunknown类型等于never
 * 8. 只能对unknown类型进行等或不等操作, 不能进行其他操作
 * 9. unknown类型的值不能访问他的属性, 作为函数调用和作为类创建实例
 * 10. 使用映射类型时, 如果遍历的是unknown类型, 则不会映射任何类型
 */

/** 条件类型 */
/** 分布式条件类型 */
/** 条件类型的类型推断 infer Array<infer U> */

/** Exclude<T, U> 排除 */

/** Extract<T, U> */

/** NonNullable<T> */

/** ReturnType<T> 获取函数返回值类型 */

/** InstanceType<T> */