import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import './App.css'

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
    <div>App</div>
  </MuiThemeProvider>
)

export default App
