

function quickSort(array) {
  console.time('12')
  if(array.length <= 1) return array
  var pivotIndex = Math.floor(array.length / 2)
  var pivot = array.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < array.length; i++) {
    if(array[i] > pivot) {
      right.push(array[i])
    } else {
      left.push(array[i])
    }
  }
  console.time('123')
  return quickSort(left).concat([pivot], quickSort(right))
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]\


// 插入排序
function insertionSort(array) {
  console.time( 'insertSort time')
  for(var i = 1; i < array.length; i++) {
    var key = array[i]
    var j = i - 1
    while(array[j] > key) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = key
  }
  console.timeEnd('insertSort timeEnd ')
  return array
}
var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(insertionSort(arr))

function binaryInsertSort(array) {
  for(var i = 1; i < array.length; i++) {
    var key = array[i]
        left = 0,
        right = i - 1;
    while(left <= right) {
      var middle = parseInt((left + right) / 2)
      if(key < array[middle]) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
    for(var j = i - 1; j >= left; j--) {
      array[j + 1] = array[j]
    }
    array[left] = key
  }
  return array
}


选择排序
function selectSort(arr) {
  var len = arr.length
  var minIndex, temp
  for(var i = 0; i < len; i++) {
    minIndex = i
    for(var j = i + 1; j < len; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    ar[minIndex] = temp 
  }
  return arr
}

function selectSort(arr) {
  var minIndex, temp
  for(var i = 0; i < arr.length; i++) {
    minIndex = i
    for(var j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(selectSort(arr))
var reverseWords = function(str) {

  str = str.trim().split(" ")

  var t = str.filter(function(s) {
    return s && s.trim()
  })

  t = (t.reverse() + "").replace(/,/g, " ")
  return t
}
var str =  "     aeee     eeeeb    "
reverseWords(str)



function unique(arr) {
  var len = arr.length
  var res = []
  for (var i = 0; i < len; i++) {
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res
}

var s = [1, 258, 1, 45, 71, 2, 1, , 2, 3, 3, 3, 3, 6, 6, 5]
function unique(arr){
  return Array.from(new Set(arr));
}

console.log("dddd", unique(s))