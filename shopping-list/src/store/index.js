import { createStore } from 'redux'

import reducers from './reducers'

const REDUX_DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers, REDUX_DEVTOOLS)

export default store
