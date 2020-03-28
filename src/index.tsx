import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { ThemeProvider } from '@material-ui/core/styles'

import environment from 'utils/environment'
import Header from 'components/Header/Header'
import JobProfile from 'components/JobProfile/JobProfile'
import HTTPClientContext from 'utils/httpClient'
import theme from 'utils/theme'
import JobSelectorContext, { jobValue } from 'utils/jobSelector'

import './index.css'
import App from './components/App'

const userId = '7f90df6e-b832-44e2-b624-3143d428001f'

const axiosClient = axios.create({
  baseURL: `${environment.api}/${userId}/`,
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HTTPClientContext.Provider value={axiosClient}>
        <JobSelectorContext.Provider value={jobValue}>
          <App>
            <Header />
            <JobProfile />
          </App>
        </JobSelectorContext.Provider>
      </HTTPClientContext.Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
