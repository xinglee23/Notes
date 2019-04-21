发布订阅模式：又称观察者模式，它定义对象之间一种一对多的依赖关系，当一个对象发生改变时，所有依赖于它的对象都将得到通知
使用场景：javascript开发中，我们一般用事件模型代替传统的发布-订阅模式

###### 现实中的发布-订阅模式：
* 我们微信订阅公众号信息，该公众号一旦发布新的信息我们手机就能查收到。还有很多其他的例子比如手机短信，比如我们买房订阅房产信息，有新的房源就会及时通知我们
* 程序中我们如何实现呢？
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