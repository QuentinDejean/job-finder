import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { ThemeProvider } from '@material-ui/core/styles'

import environment from 'utils/environment'
import HTTPClientContext from 'utils/httpClient'
import theme from 'utils/theme'

import './index.css'
import App from './components/App'

const axiosClient = axios.create({
  baseURL: environment.api,
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HTTPClientContext.Provider value={axiosClient}>
        <App />
      </HTTPClientContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
