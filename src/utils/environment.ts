type Environment = {
  api: string
}

const environment: Environment = {
  api: process.env.REACT_APP_API_ENDPOINT as string,
}

export default environment
