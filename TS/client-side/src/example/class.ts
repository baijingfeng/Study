// class Point {
//   public x: number
//   public readonly y: number
//   constructor(x: number, y: number) {
//     this.x = x
//     this.y = y
//   }

//   public getPosition() {
//     return ``
//   }
// }

// public, 公共

// private, 私有的; 在哪个区域定义, 就只能在那里访问

// protected, 受保护的

// readonly, 实例只能读取, 不能被修改

// constructor的参数上应用访问修饰符

// 存取器, get set

// 抽象类, 被其他类继承, 本身不能被实例化

// abstract class People {
//   constructor(public name: string) {}
//   public abstract printName(): void
// }

// class Man extends People {
//   constructor(name: string) {
//     super(name)
//     this.name = name
//   }

//   public printName() {
//     console.log('this.name', this.name)
//   }
// }

// 对象改变引用, 并不受类型限制
abstract class People {
	public abstract _name: string
	abstract get insideName(): string
	abstract set insideName(value: string)
}

class P extends People {
	public _name: string
	public insideName: string

	constructor(name: string, insideName: string) {
		super()
		this._name = name
		this.insideName = insideName
	}
}

interface FoodInterface {
	type: string
	name: string
}

class FoodClass implements FoodInterface {
	type: string = ''
	name: string = ''
}

// 接口继承类时, 只继承声明, 不继承实现;
class A {
	protected name: string = ''
}

interface I extends A {}

class B extends A implements I {
  public name: string = ''
}


const create = <T>(c: new() => T): T => {
  return new c()
}

class Infos {
  public age: number = 3
}

create<Infos>(Infos)