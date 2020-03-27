import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { ThemeProvider } from '@material-ui/core/styles'

import environment from 'utils/environment'
import Header from 'components/Header/Header'
import JobProfile from 'components/JobProfile/JobProfile'
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
        <App>
          <Header />
          <JobProfile />
        </App>
      </HTTPClientContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
