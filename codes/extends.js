// 原型继承
function Parent() {
  this.name = 'Kevin'
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child() {

}

Child.prototype = new Parent()

// 构造函数继承
function Parent() {
  this.name = ['kevin', 'daisy']
}

function Child() {
  Parent.call(this)
}

var child1 = new Child()

// 组合继承
function Parent(name) {
  this.name = name
  this.color = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child


// 原型式继承
// 就是 ES5 Object.create 的模拟实现，将传入的对象作为创建的对象的原型。
function creatObj(o) {
  function F() { }
  F.prototype = o
  return new o
}

var person = {
  name: 'kevin',
  friends: ['daisy', 'kelly']
}

var person1 = creatObj(person)

// 寄生式继承
function createObj() {
  var clone = Object.create(o)
  clone.sayName = function () {
    console.log('hi')
  }
  return clone
}

// 寄生组合继承
function Parent(name) {
  this.name = name
  this.color = ['blue', 'red', 'green']
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

var F = function () { }
F.prototype = Parent.prototype

Child.prototype = new F()