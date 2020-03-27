import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core'
import App from 'components/App'

import theme from './theme'
import HTTPClientContext, { AxiosMock } from './httpClient'

type Options = {
  apiPayload: any
}

const axiosMock = (apiPayload?: any): AxiosMock => ({
  get: async () => ({ data: apiPayload }),
})

const AllTheProviders = (options?: Options) => () => {
  const axiosClient = axiosMock(options && options.apiPayload)

  return (
    <ThemeProvider theme={theme}>
      <HTTPClientContext.Provider value={axiosClient}>
        <App />
      </HTTPClientContext.Provider>
    </ThemeProvider>
  )
}

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders(options) })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
