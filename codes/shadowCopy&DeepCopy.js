function shadowCopy(obj) {
  if(!obj && typeof obj !== 'object') {
    return
  }
  var copy = obj.constructor === 'Array' ? [] : {}
  for(var i in obj) {
    if(obj.hasOwnProperty(i)) {
      copy[i] = obj[i]      
    }
  }
  return copy
}

function deepCopy(obj) {
  if(!obj && typeof obj !== 'object') {
    return
  }
  var copy = obj.constructor === 'Array' ? [] : {}
  for(var props in obj) {
    if(obj.hasOwnProperty(props)) {
      if(obj[props] && obj[props] === 'object') {
        copy[props] = obj[props].constructor === 'Array' ? [] : {}
        copy[props] = deepCopy(obj[props])
      } else {
        copy[props] = obj[props]
      }
    }
  }
}

// deepCopy
var arr = ['old', 1, true, ['old1', 'old2'], { old: 1 }]
var new_arr = JSON.parse(JSON.stringify(arr))
console.log(new_arr)
