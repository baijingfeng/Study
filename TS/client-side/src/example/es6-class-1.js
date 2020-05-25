// class 中的属性是定义在原型对象上的, 构造函数中的this.prop才是自身的属性, 静态方法无法被实例继承;
// function Point(x, y) {
//   this.x = x 
//   this.y = y
// }

// Point.prototype.getPostion = function () {
//   return '(' + this.x + ', ' + this.y + ')'
// }

// ES6方式

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  getPostion() {
    return `(${this.x}, ${this.y})`
  }
}

const p1  = new Point(1, 2)


// super作为函数, 指代父类的constructor, 只能在constructor中调用

// super作为对象中, 在普通方法中, 指向父类的原型对象; 在静态方法中, 指向父类本身;

// new.target, 限定只能被继承, 不能被实例化

// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype
// 实例的__proto__属性的__proto__指向父类实例的__proto__
