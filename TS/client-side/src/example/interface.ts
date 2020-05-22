const getFullName = ({firstName, lastName}: NameInfo): string => {
	return `${firstName} ${lastName}`
}

getFullName({
	firstName: 'zhang',
	lastName: 'san',
})

// 类型兼容性, 索引签名, 类型断言
interface NameInfo {
	firstName: string
	lastName: string
}

// tslint:disable-next-line: no-console
console.log(
	'getFullName',
	getFullName({
		firstName: 'zhang',
		lastName: 'string',
	})
)

const getVegetables = ({color, type}: VegetableInfo): string => {
	return `A ${color ? color + ' ' : ''} ${type}`
}

interface VegetableInfo {
	color?: string
	type: string
}

const b = {
	type: '',
	color: '',
	size: 3,
	change: 23,
}

getVegetables(b)

interface ArrInter {
	0: number
	1: string
}

let arr1: ArrInter = [1, 'fsd']

type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (n1, n2) => n1 + n2

interface RoleDic {
	[id: number]: string
}

const role1: RoleDic = {
	0: 'fd',
	1: 'fsdf',
}

// 接口的继承
interface Vegetables {
	color: string
}

interface Tomato extends Vegetables {
	radius: string
}

interface Carrot extends Vegetables {
	length: number
}

const corrot1: Carrot = {
	color: 'orange',
	length: 1,
}

// 混合类型的接口(闭包, 函数对象)
interface Counter {
	(): void
	count: number
}

const getCounter = (): Counter => {
	const c = () => {
		c.count++
	}
	c.count = 0
	return c
}


