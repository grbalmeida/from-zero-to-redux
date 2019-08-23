import { createStore } from 'redux'

import reducers from './reducers'
import { loadState, saveState } from './local-storage'

const localStorageState = loadState()
const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  reducers,
  localStorageState,
  REDUX_DEVTOOLS
)

store.subscribe(() => {
  saveState({ list: store.getState().list })
})

export default store
