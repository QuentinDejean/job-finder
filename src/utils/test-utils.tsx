import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core'
import App from 'components/App'

import theme from './theme'
import HTTPClientContext, { AxiosMock } from './httpClient'

const axiosMock = (apiPayload?: any): AxiosMock => ({
  get: async () => ({ data: apiPayload }),
})

type Options = {
  apiPayload: any
}

type Props = {
  children: React.ReactNode
}

const AllTheProviders = (options?: Options) => ({ children }: Props) => {
  const axiosClient = axiosMock(options && options.apiPayload)

  return (
    <ThemeProvider theme={theme}>
      <HTTPClientContext.Provider value={axiosClient}>
        <App>{children}</App>
      </HTTPClientContext.Provider>
    </ThemeProvider>
  )
}

const customRender = (ui: React.ReactElement, options?: any) =>
  render(ui, { wrapper: AllTheProviders(options) as any })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
