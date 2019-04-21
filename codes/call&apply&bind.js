Function.prototype.call2 = function (context) {
  var context = context || window
  context.fn = this

  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args + ')')
  delete context.fn
  return result
}

Function.prototype.apply2 = function (context, arr) {
  var context = context || window
  context.fn = this

  var result
  if (!arr) {
    result = context.fn()
  } else {
    var args = []
    for (var i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }
  delete context.fn
  return result
}

Function.prototype.bind = function (context) {
  if (typeof this !== 'function') {
    return new Error('......')
  }
  var self = this
  var args = Array.prototype.slice.call(arguments, 1)

  var fNOP = function () { }
  
  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(this instanceof fNOP ? this : context, bindArgs.concat(args))
  }
  
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP
  return fBound
}