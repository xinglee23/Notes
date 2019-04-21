

var element = {
  tagName: 'ul',
  props: {
    id: 'list'
  },
  children: [
    { tagName: 'li', props: { class: 'item' }, children: ['Item 1'] },
    { tagName: 'li', props: { class: 'item' }, children: ['Item 1'] },
    { tagName: 'li', props: { class: 'item' }, children: ['Item 1'] }
  ]
}

// 用js来表示DOM节点，记录他的节点类型
function Element(tagName, props, children) {
  this.tagName = tagName
  this.props = props
  this.children = children
}

module.exports = function (tagName, props, children) {
  return new Element(tagName, props, children)
}

var el = require('./element')

var ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item' }, ['Item 1'])
])

// 将js对象构建成真正的DOM
Element.prototype.render = function () {
  var el = document.createElement(this.tagName)
  var props = this.props

  for (var propName in props) { // 设置节点的DOM属性
    var propValue = props[propName]
    el.setAttribute(propName, propValue)
  }

  var children = this.children || []

  children.forEach(function (child) {
    var childEl = (child instanceof Element)
      ? child.render()  // 如果子节点也是虚拟DOM，递归构建DOM节点
      : document.createTextNode(child) // 如果字节点是字符串，则只构建文本节点
    el.appendChild(childEl)
  })

  return el
}

var ulRoot = ul.render()
document.body.appendChild(ulRoot)