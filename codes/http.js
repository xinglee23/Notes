var socket = new WebSocket('ws://127.0.0.1:12010/updates')
socket.onopen = function () {
  setInterval(function () {
    if (socket.bufferedAmount == 0) {
      socket.send(getUpdateData())
    }
  }, 50)
  socket.onmessage = function (event) {
    // TODO
  }
}

var pathpaser = function (req, res) {
  var pathname = url.parse(req.url).pathname
  fs.readFile(path.join(ROOT, pathname), function (err, file) {
    if (err) {
      res.writeHead(404)
      res.end('cannot find file')
      return
    }
    res.writeHead(200)
    res.end(file)
  })
}

var fileFinder = function (res, res) {
  var pathname = url.parse(req.url).pathname
  var paths = pathname.split('/')
  var controller = path[1] || 'index'
  var action = path[2] || 'index'
  var args = path.slice(3)
  if (handles[controller] && handles[controller][action]) {
    handles[controller][action].apply(null, [req, res].concat(args))
  } else {
    res.writeHead(500)
    res.end('can not find response controller')
  }
}

var parseCookie = function (cookie) {
  var cookies = {}
  if (!cookie) {
    return cookies
  }

  var list = cookie.split(',')
  for (var i = 0; i < list.length; i++) {
    var pair = list[i].split('=')
    cookies[pair[0].trim()] = pair[1]
  }
  return cookies
}

for (var i = 0; i < list.length; i++) {
  var pair = list.split('=')
  cookies[pairs[0].trim()] = pairs[1]
}


// 生成session
var sessions = {}
var key = 'session_id'
var EXPIRES = 20 * 60 * 1000

var generate = function () {
  var session = {}
  session.id = (new Date().getTime() + Math.random())
  session.cookie = {
    expire: (new Date().getTime()) + ERXPIRES
  }
  sessions[session.id] = session
  return session
}

// 检查session是否过期
var isExpires = function (req, res) {
  var id = req.cookies[key]
  if (!id) {
    req.session = generate()
  } else {
    var session = sessions[id]
    if (session) {
      if (session.cookie.expire > (new Date()).getTime()) {
        // 更新超时时间
        session.cookie.expire = (new Date()).getTime() + EXPIRES
      } else {
        // 超时了，删除旧的数据，并重新生成
        delete session[id]
        req.session = generate()
      }
    } else {
      // 如果session过期或者口令不对，重新生成session
      req.session = generate()
    }
  }
}

// 生成新的值，并响应给客户端，设置新的值
var writeHead = res.writeHead
res.writeHead = function () {
  var cookies = res.getHeader('Set-Cookie')
  var session = seralize(key, req.session.id)
  cookies = Array.isArray(cookies) ? cookies.concat(session) : [cookies, session]
  res.setHeader('Set-Cookie', cookies)
  return writeHead.apply(this, argument)
}


var getURL = function (_url, key, value) {
  var obj = url.parse(_url, true)
  obj.query[key] = value
  return url.format(obj)
}


app.use = function (path) {
  var handles
  if (typeof handle === 'string') {
    handle = {
      path: pathRegExp(path),
      stack: Array.prototype.slice.call(argument, 1)
    }
  } else {
    hanle = {
      path: pathRegExp('/'),
      stack: Array.prototype.slice.call(argument, 0)
    }
  }
  routes.all.push(handle)
}

var lenthtLonest = function(s) {
  var res = 0
  var str = ""
  var len = str.length
  for(var i = 0; i < len; i++) {
    var char = s.charAt(i)
    var index = str.indexOf(char)
    if(index === -1) {
      str += char
      res = res < str.length ? str.legth : res
    } else {
      str = str.substr(index + 1) + char
    }
  }
}


var longestCommonPrefix = function(strs) {
  var firstStrs = strs[0]
  var result = ""
  if(!strs.length) {
    return
  }

  for(var i = 0; i < firstStrs.length; i++) {
    for(var j = 1; j < str.length; j++) {
      if(firstStrs[i] !== strs[j][i]) {
        return result
      }
    }
    result += firstStrs[i]
  }

  return result
}

const preOrder = root => {
  const result = []
  const dfs = node => {
    if(!node) return
    result.push(node.left)
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return result.join('-')
}

const midOrder = root => {
  const result = []
  const dfs = node => {
    if(!node) return
    dfs(node.left)
    result.push(node.val)
    dfs(node.right)
  }

  dfs(root)

  return result.join('-')
}

var isSubtree = function(s, t) {
  const queue = [s]
  const preT = preOrder(t)
  const midT = midOrder(t)

  while(queue.length) {
    const current = queue.shift()
    if(!current) continue
    if(current.val === t.val
      && preOrder(current) === preT
      && midOrder(current) === midT
    ) {
      return true
    }

    quenue.push(current.left, current.right)
  }

  return false
}

var distributeCandies = function(candies) {
  var candiesNum = new Set(candies)
  return Math.min(candiesNum.length, candies.length / 2)
};