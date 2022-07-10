const logger = (store) => (next) => (action) => {
    console.group(action.type)
      console.log('The action: ', action)
      const val = next(action)
      console.log('The new state: ', store.getState())
    console.groupEnd()
    return val
}

export default logger