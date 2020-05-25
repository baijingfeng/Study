const getArray = <T>(value: T, times: number = 8): T[] => {
	return new Array(times).fill(value)
}

getArray<number>(1, 4).map((item) => item)

interface ValueWithLength {
	length: number
}

type GetArray<T extends ValueWithLength> = (arg: T, times: number) => T[]

let getMyArr: GetArray<string> = (arg, times) => {
	return new Array(times).fill(arg)
}

const getProps = <T, K extends keyof T>(object: T, propName: K) => {
	return object[propName]
}

const obj2 = {
	a: 'a',
	b: 'b',
}

getProps(obj2, 'a')

getProps(obj2, 'b')
