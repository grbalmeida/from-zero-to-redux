import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar } from '@material-ui/core'

import { HOME } from 'routes'

const Header = () => (
  <AppBar position='static' color='primary'>
    <div className='header'>
      <Link to={HOME}>
        <p className='title text-left'>Shopping List</p>
      </Link>
    </div>
  </AppBar>
)

export default Header
