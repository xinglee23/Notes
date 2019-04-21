代理模式：是为一个对象提供代用品或占用符，以便控制对他的访问
使用场景：当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的替身对象，替身对象对请求作出一些处理之后，再把请求转交给本体对象。
```js
  var myImage = (function() {
    var imgNode = document.createElement('img')
    document.body.appendChild(imgNode)

    return {
      setSrc: function(src) {
        imgNode.src = src
      }
    }
  })()

  var proxyImage = (function() {
    var img = new Image
    img.onload = function() {
      myImage.setSrc(this.src)
    }

    return  {
      setSrc: function(src) {
        myImage.setSrc('/img/loading.gif')
        img.src = src
      }
    }
  })
  proxyimage.setSrc('http://pircture.png')
```

