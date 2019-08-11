import React from 'react'

import { SearchBar, VideoList, VideoPlayer } from 'components'
import './App.css'

const App = () => (
  <div className='container'>
    <SearchBar />
    <VideoList />
    <VideoPlayer />
  </div>
)

export default App
