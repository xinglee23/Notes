// 去重
// var array = [1]
function unique(array) {
  var res = []
  for (var i = 0; i < array.length; i++) {
    var current = array[i]
    if (res.indexOf(current) === -1) {
      res.push(current)
    }
  }
  return res
}

// 排序后去重
function unique(array) {
  var res = []
  var sortedArray = array.concat().sort()
  var seen
  for (var i = 0; i < sortedArray.length; i++) {
    // 如果第一个元素或者相邻元素不相同
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i])
    }
    seen = sortedArray[i]
  }
  return res
}

function unique(array) {
  var res = array.filter(function (itme, index, array) {
    return array.indexOf(item) === index
  })
  return res
}

function unique(array) {
  return array.concat().sort().filter((item, index, array) => {
    return !index || item !== array[i - 1]
  }
  )
}

function unique(array) {
  return Array.from(new Set(array))
}


var unique = e => [...new Set(array)]

// 判断是不是空对象
function isEmptyobject(obj) {
  // 判断是不是有属性
  for (var name in obj) {
    return false
  }

  return true
}

// 判断是不是window对象
function isWindow(obj) {
  return obj != null && obj === obj.window
}

// 判断是不是数组或者类数组
function isArrayLike(obj) {
  // obj必须有length
  var length = !!obj && "length" in obj && obj.length
  var typeRes = type(obj)

  // 排除掉函数和Window对象
  if (typeRes === 'function' || isWindow(obj)) {
    return false
  }

  return typeRes === 'array' || length === 0 ||
    typeof length === 'number' && length > 0 && (length - 1) in obj
}


// extend
function extend() {
  var name, options, copy
  var length = arguments.length
  var i = 1
  var target = arguments[0]

  for (; i < length; i++) {
    options = arguments[i]
    if (options != null) {
      for (name in options) {
        copy = options[name]
        if (copy !== undefined) {
          target[name] = copy
        }
      }
    }
  }
  return target
}

function extend() {
  // 默认不进行深拷贝
  var deep = false
  var name, options, src, copy
  var length = arguments.length
  // 记录要复制的对象下标
  var i = 1
  // 第一个参数不传布尔值的情况下，target默认是第一个参数
  var target = arguments[0] || {}
  // 如果第一个参数是布尔值，第二个参数才是target
  if (typeof target == 'boolean') {
    deep = target
    target = arguments[i] || {}
    i++
  }
  // 如果target不是对象，我们是无法就行复制的，所以设为{}
  if (typeof target !== 'object') {
    target = {}
  }

  // 循环遍历要复制的对象们
  for (; i < length; i++) {
    // 获取当前对象
    options = arguments[i]
    // 要求不能为空，避免extends(a, b)这种情况
    if (options != null) {
      for (name in options) {
        // 目标属性值
        src = target[name]
        // 要复制的对象的属性值
        copy = options[name]
        if (deep && copy && typeof copy == 'object') {
          // 递归调用
          target[name] = extend(deep, src, copy)
        }
        else if (copy !== undefined) {
          target[name] = copy
        }
      }
    }
  }
  return target
}

function sub_curry(fn) {
  var args = [].slice.call(arguments, 1)
  return function () {
    var newArgs = args.concat([].slice.call(arguments))
    return fn.apply(this, newArgs)
  }
}

function curry(fn, length) {
  length = length || fn.length

  var slice = Array.prototype.slice

  return function () {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments))
      return curry(sub_curry.apply(this, combined), length - arguments.length)
    } else {
      return fn.apply(this, arguments)
    }
  }
}


function sub_curry(fn) {
  return function () {
    return fn()
  }
}

function curry(fn, length) {
  length = length || 4
  return function () {
    if (length > 1) {
      return curry(sub_curry(fn), --length)
    } else {
      return fn()
    }
  }
}
function curry(fn, args) {
  var length = fn.length

  args = args || []

  return function () {
    var _args = args.slice(0),
      arg,
      i
    for (i = 0; i < arguments.length; i++) {

    }
  }
}

function partial(fn) {
  var args = [].slice.call(arguments, 1)
  return function () {
    var newArgs = args.concat([].slice.call(arguments))
    return fn.apply(this, newArgs)
  }
}

var foo = function () {
  var t = new Date()
  foo = function () {
    return t
  }
  return foo()
}

function addEvent(type, el, fn) {
  if (window.addEventListener) {
    el.addEventListener(type, fn, false)
  }
  else if (window.attachEvent) {
    el.attachEvent('on' + type, fn)
  }
}

function addEvent(type, el, fn) {
  if (window.addEventListener) {
    addEvent = function (type, el, fn) {
      el.addEventListener(type, fn, false)
    }
  }
  else if (window.attachEvent) {
    addEvent = function (type, el, fn) {
      el.attachEvent('on' + type, fn)
    }
  }
}

function compose() {
  var args = arguments
  var start = args.length - 1

  return function () {
    var i = start
    var result = args[start].apply(this, arguments)
    while (i--) result = args[i].call(this, result)
    return result
  }
}

return function () {
  var args = arguments
  var start = arguments.length - 1

  return function () {
    var i = start
    var result = args[start].apply(this, arguments)
    while (i--) result = args[i].apply(this, result)
    return result
  }
}



function Parent(name) {
  this.name = name
  this.color = ['red', 'blue']
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

var F = function () { }
F.prototype = Parent.prototype
Child.prototype = new F()
function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

Child.prototype = new Parent()

async function getUserByAsync() {
  let user = await fetchUser()
  return user
}
const user = await getUserByAsync()

// jsonp跨域
function jsonp(url, jsonpCallback, success) {
  const script = document.createElement('script')
  script.src = url
  script.async = true
  script.type = 'text/javascript'

  window[jsonpCallback] = function (data) {
    success && success(data)
  }
  document.body.appendChild(script)
}

function compose() {
  var args = arguments
  var start = args.length - 1
  return function () {
    var i = start
    var result = args[start].apply(this, arguments)
    while (i--) {
      result = args[i].call(this, result)
    }
    return result
  }
}

// 函数记忆
function memoize(f) {
  var cache = {}
  return function () {
    var key = arguments.length + Array.prototype.join.call(arguments, ",")
    if (key in cache) {
      return cache[key]
    }
    else {
      return cache[key] = f.apply(this, arguments)
    }
  }
}

var conut = 0
var fibonacci = function (n) {
  count++
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

// memoize
var memoize = function (func, hasher) {
  var memoize = function (key) {
    var cache = memoize.cache
    var address = '' + (hasher ? hasher.apply(this, arguments) : key)
    if (!cache[address]) {
      cache[address] = func.apply(this, arguments)
    }
    return cache[address]
  }
  memoize.cache = {}
  return memoize
}


var times = [0, 0, 0, 0, 0]

for (var i = 0; i < 10000; i++) {
  let arr = [1, 2, 3, 4, 5]
  arr.sort(() => {
    return Math.random() - 0.5
  })
}

function shuffle(a) {
  var j, x, i
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i)
    x = a[i - 1]
    a[i - 1] = a[j]
    a[j] = x
  }
  return a
}

// 阶乘
function factorial(n) {
  if (n == 1) return n
  return n * factorial(n - 1)
}

// 
function fabnocci(n) {
  return n < 2 ? 0 : fabnocci(n - 1) + fabnocci(n - 2)
}

parternpartern