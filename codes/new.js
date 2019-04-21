// create new
 function objectFactory() {
   var obj = new Object()
   Constuctor = [].shift.call(arguments)
   obj.__proto__ = Constuctor.prototype
   var ret = Constuctor.apply(obj, arguments)
   return typeof ret === 'object' ? ret : obj
 }