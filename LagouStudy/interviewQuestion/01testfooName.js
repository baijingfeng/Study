/* function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}

Foo.getName = function() {
  console.log(2)
}

Foo.prototype.getName = function() {
  console.log(3)
}

var getName = function() {
  console.log(4)
}

function getName() {
  console.log(5)
}

Foo.getName() // 2
Foo().getName() // 1
getName() // 1
new Foo.getName() // 2
new (Foo().getName)() // 1
new Foo().getName() // 3 (new Foo()).getName()
new new Foo().getName()// 3 new ((new Foo()).getName)()
 */

function Foo() {
	this.getName = function() {
		console.log(3);
		return {
			getName: getName 
		}
	}; 
	getName = function() {
		console.log(1);
	};
	return this
}
Foo.getName = function() {
	console.log(2);
};
Foo.prototype.getName = function() {
	console.log(6);
};
var getName = function() {
	console.log(4);
};

function getName() {
	console.log(5);
} 

Foo.getName(); 
getName(); 
console.log(Foo())
Foo().getName(); 
getName(); 
new Foo.getName(); 
new Foo().getName(); 

new Foo().getName().getName(); 
new new Foo().getName();             




function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}

Foo.getName = function() {
  console.log(2)
}

Foo.prototype.getName = function() {
  console.log(3)
}
// console.log('getName', getName)
var getName = function() {
  console.log(4)
}

const obj = {
  member:20
};
const test = a => obj.member = a;
console.log(test(10));
console.log(obj.member);

console.log('c', c)
a = 3 
var b = 4
function c() {}

a2 = 3 
let c = 4

a3 = 3
const d = 4

;(function() {
	a = 3 
  let b = 4
})()

