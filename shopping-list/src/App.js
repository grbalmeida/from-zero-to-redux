import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import './App.css'
import { Home } from 'pages'
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
    <Header />
    <Home />
  </MuiThemeProvider>
)

export default App
