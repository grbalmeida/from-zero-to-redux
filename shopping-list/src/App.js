import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import './App.css'
import { Home, List } from 'pages'
import { Header } from 'components'
import { HOME, LIST } from 'routes'
import store from 'store'

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
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path={HOME} component={Home} />
            <Route path={LIST} component={List} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
)

export default App
