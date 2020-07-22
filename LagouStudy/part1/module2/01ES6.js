// 1. for循环两层作用域
// 模板字符串标签函数
// 函数参数带有默认值,必须放在最后. 应该是最好放在最后
// 参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
// 有默认值和rest后, 函数length属性将不包含这些参数, length是期望参数的个数
// 函数也是有双重作用域,类似for循环
// _this
// 计算属性名
// Object.assign(target, source1, ...), 不改变源对象存储地址; 可用于复制对象
// Object.is(a, b), 判断两个值是否相等; NaN, +0两种情况
// Object.defineProperty(), 用于监控属性读写, 是否可枚举.
// Proxy 对象,代理,
// Reflect 对象, 统一的对象操作API, 静态类;
// Reflect, 内部封装了一系列对对象的底层操作, 13个操作方法;类似Math的作用;
// Reflect的成员方法就是Proxy处理对象的默认实现; 因 此和Reflect相同的方法名;
// Set, 数据结构集合, add添加成员,可以链式调用.
// Set, size,大小,类似length
// Set, has方法, 是否存在特定值; delete, clear
// Array.from(new Set(arr))
// Map, 数据结构, 复杂对象(可以使用除了字符串其他的键值),键值对集合,用于映射两个任意类型数据之间的关系
// Map, set,get, has, delete, clear; 属于可迭代的数据结构
// Symbol, 表示独一无二的值, symbol类型;
// Symbol,  Symbol('str'), Symbol目前最主要的作用是为对象添加独一无二的属性名.
// 8种数据类型, undefined, null, boolean, string, number, Object, Symbol, BigInt
// Symbol, Symbol.for(''),
// for...of
// iterator 迭代器

/**
 * Proxy 可以理解成，在目标对象之前架设一层“拦截”，
 * 外界对该对象的访问，都必须先通过这层拦截，
 * 因此提供了一种机制，可以对外界的访问进行过滤和改写。
 * Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，
 * 可以译为“代理器”。
 *
 * get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。
 * set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
 * has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
 * deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
 * ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
 * getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
 * defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
 * preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
 * getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
 * isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
 * setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
 * apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
 * construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
 */
const person = {
	name: 'bai',
	age: 20,
}

const personProxy = new Proxy(person, {
	get(target, property) {
		// console.log(target, property)
		return property in target ? target[property] : 'default'
	},
	set(target, property, value) {
		if (property === 'age') {
			if (!Number.isInteger(value)) {
				throw new TypeError(`${value} is not an int`)
			}
		}

		target[property] = value
		console.log(target, property, value)
	},
})

console.log(personProxy.name)
console.log(personProxy.xxx)
personProxy.gender = true
personProxy.age = 2

const res = x => x

console.log('res(2)', res(2))
