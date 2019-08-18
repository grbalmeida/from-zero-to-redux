import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import './App.css'
import { Home, List } from 'pages'
import { Header } from 'components'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#E91E63'
    },
    secondary: {
      main: '#00B0FF'
    }
  }
})

const App = () => (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/list' component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  </MuiThemeProvider>
)

export default App
