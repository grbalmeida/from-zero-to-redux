import React from 'react'
import { Provider } from 'react-redux'

import store from 'redux/store'
import { SearchBar, VideoList, VideoPlayer } from 'components'
import './App.css'

const App = () => (
  <Provider store={store}>
    <div className='container'>
      <SearchBar />
      <VideoList />
      <VideoPlayer />
    </div>
  </Provider>
)

export default App
