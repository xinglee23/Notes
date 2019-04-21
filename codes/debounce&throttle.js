// debounce
function debounce(func, wait, immediate) {
  var timeout, result

  return function () {
    var context = this
    var args = arguments
    if (timeout) clearTimeout(timeout)

    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(context, args)
    }
    else {
      timeout = setTimeout(function () {
        func.apply(context, args)
      }, wait)
    }
    return result
  }
}

// debounce
function debounce(func, wait, immediate) {
  var timeout, result

  var debounced = function () {
    var context = this
    var args = arguments

    if (timeout) clearTimeout(timeout)

    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(function () {
        timeout = null
      }, wait)
      if ((callNow)) result = func.apply(context, args)
    }
  }

  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}

// throttle
function throttle(func, wait) {
  var timeout
  var previous = 0

  return function () {
    context = this
    args = arguments
    if (!timeout) {
      timeout = setTimeout(function () {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}

function throttle(func, wait) {
  var timeout, context, args, result
  var previous = 0
  if (!option) option = {}

  var later = function () {
    // previous = +new Date()
    previous = option.leading === false ? 0 : new Date().getTime()
    timeout = null
    func.apply(context, args)
  }

  var throttled = function () {
    var now = +new Date()
    if (!previous && option.leading === false) previous = now
    // 下次出发func剩余的时间
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    // 如果没有剩余时间了或者你修改了系统时间
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing != false) {
      timeout = setTimeout(later, remaining)
    }
  }
  return throttled
}