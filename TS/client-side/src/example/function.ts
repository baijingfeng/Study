function add1(arg1: number, arg2: number): number {
	return arg1 + arg2
}

const add2 = (arg1: number, arg2: number): number => {
	return arg1 + arg2
}

let add3: Add = (x, y) => x + y

type Add = (x: number, y: number) => number

type AddFunction = (arg1: number, arg2: number, arg3?: number) => number

let addFunction: AddFunction

addFunction = (x, y) => x + y

const addFunctions: AddFunction = (x, y, z = 0) => x + y + z

function handleData(x: string): string[]

function handleData(x: number): number[]

function handleData(x: any): any {
	if (typeof x === 'string') {
		return x.split('')
	} else {
		return x.toString().split('').map((item: string) => Number(item))
	}
}