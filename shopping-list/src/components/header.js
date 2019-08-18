import React from 'react'
import { AppBar } from '@material-ui/core'

const Header = () => (
  <AppBar position='static' color='primary'>
    <div className='header'>
      <p className='title'>Shopping List</p>
    </div>
  </AppBar>
)

export default Header
