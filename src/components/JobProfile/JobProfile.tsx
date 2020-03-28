import React, { useContext, useState, useEffect } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import styled from 'styled-components'

import HTTPClientContext from 'utils/httpClient'
import JobSelectorContext from 'utils/jobSelector'

import { skeletonId } from './constants'
import Actions from './Actions/Actions'
import Title from './Title/Title'

import type { Title as TitleT } from './Title/Title'

type Job = {
  jobId: string
  jobTitle: TitleT
  company: {
    name: string
    address: {
      formattedAddress: string
      zoneId: string
    }
    reportTo: {
      name: string
      phone: string
    }
  }
  wagePerHourInCents: number
  milesToTravel: number
  shifts: [
    {
      startDate: string
      endDate: string
    }
  ]
}

const Layout = styled.div`
  padding: 0 15px 15px;
`

const Container = styled.div`
  background-color: white;
`

const JobProfile = () => {
  const [job, setJob] = useState<Job | undefined>(undefined)
  const jobValue = useContext(JobSelectorContext)
  const axios = useContext(HTTPClientContext)

  useEffect(() => {
    async function getJobProfile() {
      const response = await axios.get('/matches')
      setJob(response.data[jobValue])
    }

    getJobProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <Container>
        {!job && (
          <Skeleton
            data-testid={skeletonId}
            variant="rect"
            width="100%"
            height={118}
          />
        )}
        {!!job && (
          <>
            <Title {...job.jobTitle} companyName={job.company.name} />
            <Actions jobId={job.jobId} />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default JobProfile
