var promise = new Promise(function (resolve, reject) {
  if (true) {
    resolve()
  } else {
    reject()
  }
})
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}

timeout(5000).then((value) => {
  console.log(value)
})


function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, 'done')
  })
}

timeout(5000).then((value) => {
  console.log(value)
})
let promise = new Promise(function (resolve, reject) {
  console.log('Promise');
  resolve();
});

promise.then(function () {
  setTimeout(function () {
    console.log('resolved')
  }, 5000)
});

console.log('Hi!');

function loadImageAsync() {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = function () {
      resolve(image)
    }

    image.onerror = function () {
      reject(new Error('Could not load image at ' + url))
    }

    image.src = url
  })
}

const getJSON = function (url) {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {
      if (this.readyState !== 4) {
        return
      }
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    const client = new XMLHttpRequest()
    client.open("GET", url)
    client.onreadystatechange = handler
    client.responseType = "json"
    client.setRequestHeader("Accept", "application/json")
    client.send()
  })

  return promise
}

getJSON("/posts.json").then(function (json) {
  console.log("Contents:" + josn)
}, function (error) {
  console.log('something worry', error)
})

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2.then(result => console.log(result))
  .catch(error => console.log(error))
new Promise((resolve, reject) => {
  resolve(1);
}).then(r => {
  console.log(r);
  console.log(2);
});
const databasePromise = connectDatabase()

const booksPromise = databasePromise
  .then(findAllBooks)
const userPromise = databasePromise
  .then(getCurrentUser)
Promise.all([
  booksPromise,
  userPromise
])
  .then(([books, users]) => pickTopRecomentations(books, user))
