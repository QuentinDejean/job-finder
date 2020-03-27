import axios from 'axios'
import React from 'react'

type AxiosMock = {
  get: () => any
}

const HTTPClientContext = React.createContext<AxiosInstance | AxiosMock>(
  axios.create()
)

export type { AxiosMock }
export default HTTPClientContext
