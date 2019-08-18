import React from 'react'

import './home.css'
import { List, NewList } from 'pages/home'

const Home = () => (
  <div className='page-container'>
    <NewList />
    <List />
  </div>
)

export default Home
