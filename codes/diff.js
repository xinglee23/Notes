// 深度优先遍历，每遍历到一个节点就把该节点和新节点的树进行对比。
// 如果有差异的话就记录到一个对象里面

// diff 函数，对比两棵树
function diff(oldTree, newTree) {
  var index = 0 // 当前节点
  var patches = {}
  dfsWalk(oldTree, newTree, index, patches)
  return patches
}

// 对两棵树进行深度优先的遍历
function dfsWalk(oldNode, newNodem, index, patches) {
  // 对比oldNode和newNode的不同，记录下来
  patches[index] = [...]

  diffChildren(oldNode.children, newNode.children, index, patches)
}

// 遍历子节点
function  diffChildren(oldChildren, newChildren, index, patches) {
  var leftNode = null
  var currentNodeIndex = index
  oldChildren.forEach(function(child, i) {
    var newChild = newChildren[i]
    currentNodeIndex = (leftNode && leftNode.count)
      ? currentNodeIndex + leftNode.count + 1
      : currentNodeIndex + 1
    dfsWalk(child, newChild, currentNodeIndex, patches)
    leftNode = child
  })
}

function patch(node, patches) {
  var walker = { index: 0 }
  dfsWalk(node, walker, patches)
}

function dfsWalk(node, walker, patches) {
  var currentPatches = patches[walker.index]

  var len = node.childNodes
      ? node.childNodes.length
      : 0
  for(var i =0; i < len; i++) {
    var child = node.childNodes[i]
    walker.index++
    dfsWalk(child, walker, patches)
  }

  if(currentPatches) {
    applyPatches(node, currentPatches)
  }
}

function applyPatches(node, currentPatches) {
  currentPatches.forEach(function(currentPatch) {
    switch (currentPatch.type) {
      case REPLACE:
        node.parentNode.replaceChild(currentPatch.node.render(), node)
        break
      case REORDER:
        reorderChildren(node, currentPatch.moves)
        break
      case PROPS:
        setProps(node, currentPatch.props)
        break
      case TEXT:
        node.textContent = currentPatch.content
        break
      default:
        throw new Error('Unknown patch type ' + currentPatch.type)
    }
  })
}