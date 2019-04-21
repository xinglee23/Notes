[命令模式]()：指的是一个执行某些特定事情的指令
[应用场景]()：有时候需要向某些对象发送请求，但是并不知道请求接收者是谁，也不知道被请求的操作是什么。此时希望用一种松耦合的方式来设计程序，使得请求发送者和请求接收者够消除彼此之间的耦合关系。

###### 命令模式的🌰
* 假设我们编写一个用户界面，该界面至少有数十个Button按钮。某些程序员负责绘制这些按钮，而另外一些程序员则复负责编写点击按钮后的具体行为，这些行为都将被封装在对象里。
* 点击按钮之后，必须向某些负责具体行为的对象发送请求，这些对象就是请求的接收者。但是目前并不知道接收者是什么对象，也不知道接收者究竟会做什么。此时我们需要借助命令对象的帮助，以便解开按钮和负责具体行为对象之间的耦合。
* 让我们用代码以命令模式来一步一步实现该需求
```html
<!-- 在页面中绘制按钮 -->
<body>
  <button id="button1">click 1</button>
  <button id="button2">click 2</button>
  <button id="button3">click 3</button>  
</body>
<script>
  var button1 = document.getElementById("button1")
  var button2 = document.getElementById("button2")
  var button3 = document.getElementById("button3")  
</script>
```
```js
<!-- 接下来定义setCommand函数，setCommand函数负责往按钮上安装命令。点击按钮会执行某个command命令，执行命令动作会被约定调用command对象的execute()方法 -->
var setCommand = function (button, command) {
  button.onclick = function () {
    command.execute()
  }
}
<!-- 点击按钮的具体行为 -->
var MenuBar = {
  refresh: function () {
    console.log('刷新界面')
  }
}

var subMenu = {
  add: function() {
    console.log('增加xx')
  },
  del: function() {
    console.log('减少xx')
  }
}

<!-- 让button变得有用起来之前，我们先把这些行为都封装在命令类中 -->
var RefreshMenuBarCommand = function (receiver) {
  return {
    execute: function() {
      receiver.refresh()
    }
  }
}

RefreshMenuBarCommand.prototype.execute = function() {
  this.receiver.refresh()
}

var AddSubMenuCommand = function(receiver) {
  this.receiver = receiver
}

AddSubMenuCommand.prototype.execute = function() {
  this.receiver.add()
}

var DelSubMenuCommand = function(receiver) {
  this.receiver = receiver
}

DelSubMenuCommand.prototype.execute = function() {
  this.receiver.del()
}

<!-- 将命令接收者传入到command对象中，并把command安装到butoon上 -->
var refreshmenuBarCommand = new RefreshMenuBarCommand(MenuBar)
var AddSubMenuCommand = new AddSubMenuCommand(SubMenu)
var DelSubMenuCommand = new DelSubMenuCommand(SubMenu)

setCommand(button1, AddSubMenuCommand)
setCommand(button2, refreshmenuBarCommand)
setCommand(button3, DelSubMenuCommand)
```