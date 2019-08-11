import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import reduxLogger from 'redux-logger'

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [reduxThunk, reduxLogger]
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(...middlewares)
))

export default store
