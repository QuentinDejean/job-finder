import React from 'react'
import { urlParams } from './url'

let jobValue = 0
try {
  const jobUrlParam = parseInt(urlParams.get('job') || '0')
  jobValue = jobUrlParam === 0 || jobUrlParam === 1 ? jobUrlParam : 0
} catch (e) {
  console.info(
    'jobURL param was passed through but neither 0 or 1, hence value will be default to 0'
  )
}

const JobSelectorContext = React.createContext<number>(0)

export { jobValue }
export default JobSelectorContext
