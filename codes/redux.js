export function createStore(reducer) {
  let currentState = {}
  let currentListener = []

  function getState() {
    return currentState
  }

  function subscribe(listener) {
    currentListener.push(listener)
  }

  function dispatch(action) {
    currentState = reducer(currentState, action)
    currentListener.forEach(v => v())
    return action
  }

  // 初始化redux，让用户拥有默认值
  dispatch({type: '@XING/LEE_REDUX'})

  return { getState, subscribe, dispatch }
}