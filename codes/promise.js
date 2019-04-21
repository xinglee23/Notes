const PENDING = 'pending'
const FULFILLED = 'fullfilled'
const REJECTED = 'rejected'

class AjPromise {
  constructor() {
    this.state = PENDING
    this.value = null
    this.reason = null
    this.onFullfilledCallback = []
    this.onRejectedCallback = []

    const resolve = value => {
      setTimeout(() => {
        if (this.state === PENDING) {
          this.state = FULFILLED
          this.value = value
          this.onFullfilledCallback.map(cb => {
            this.value = cb(this.value)
          })
        }
      })
    }

    const reject = reason => {
      setTimeout(() => {
        if (this.state === PENDING) {
          this.state = REJECTED
          this.reason = reason
          this.onRejectedCallback.map(cb => {
            this.reason = cb(this.reason)
          })
        }
      })
    }
    try {
      fn(resolve, reject)
    } catch (e) {
      reject(e)
    }
    then(onFullfilled, onRejected) {
      typeof onFullfilled === 'function' && this.onFullfilledCallback.push(onFullfilled)
      typeof onRejected === 'function' && this.onRejectedCallback.push(onRejected)
      return this
    }
  }
}