import React from 'react'
import ReduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import 'bootstrap-css-only'
import { Converter, Header } from 'components'
import reducers from 'store/reducers'

const store = applyMiddleware(ReduxPromise)(createStore)

const App = () => (
  <Provider store={store(reducers)}>
    <Header />
    <Converter />
  </Provider>
)

export default App
