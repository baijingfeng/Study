// NaN Infinity
// symbol
// export 将文件变为模块作用域
// 类型注解
// 类型推断
// 类型断言

const error: string = '100'

const foo: object = function () {}

const obj: {foo: number} = {foo: 123}

const arr1: number[] = []

const arr2: Array<number> = []

function sum(...args: number[]) {}

// 元组
const tuple: [number, string] = [1, 'fsd']

Object.entries({})

// const PostStatus = {
//   Draft: 1,
//   Published: 2,
//   Outline: 3,
// }

// 枚举, 枚举会编译为双向的键值对对象
// 常量枚举不会编译为键值对对象
const enum PostStatus {
	Draft = 1,
	Published = 2,
	Outline = 3,
}

const post = {
	title: 'he',
	content: 'fasf',
	status: PostStatus.Draft, // 1,2,3
}

// 函数类型
// 任意类型（兼容弱类型）any
// ts不对any做类型检查，因而any类型是不安全的
// 隐式类型推断，无法推断则标记为any
// 类型断言，as或者前置尖括号方式

// 接口，约定成员结构

interface Obj {
	name: string
	readonly salary?: number
	age?: number
	[prop: string]: string | number | undefined
}

// 类
class Person {
	public name: string // 默认public
	private age: number
	protected readonly gender: boolean = true // 允许继承的

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	sayHi(msg: string): void {}
}

class Student extends Person {

}

// 类， 接口（协议）
// 接口尽可能简单，仅仅约束一个功能（通过implement来实现接口）

// 抽象类，比较系统的约束 abstract（通过继承来实现），（抽象类中可以有具体的实现）

// 泛型，Generics，<T>, 后置尖括号

// 第三方模块， 类型声明文件，.d.ts
// 类型声明， declare, type
// 函数签名
