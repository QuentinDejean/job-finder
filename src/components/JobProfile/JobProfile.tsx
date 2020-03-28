import React, { useContext, useState, useEffect } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import styled from 'styled-components'

import HTTPClientContext from 'utils/httpClient'
import JobSelectorContext from 'utils/jobSelector'

import { skeletonId } from './constants'
import Actions from './Actions/Actions'
import Location from './Location/Location'
import Report from './Report/Report'
import Requirements from './Requirements/Requirement'
import Title from './Title/Title'

type Job = {
  jobId: string
  jobTitle: {
    name: string
    imageUrl: string
  }
  company: {
    name: string
    address: {
      formattedAddress: string
      zoneId: string
    }
    reportTo: {
      name: string
      phone?: string
    }
  }
  wagePerHourInCents: number
  milesToTravel: number
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
            <Location
              address={job.company.address.formattedAddress}
              distance={job.milesToTravel}
            />
            <Report
              manager={job.company.reportTo.name}
              phone={job.company.reportTo.phone}
            />
            <Requirements />
            <Actions jobId={job.jobId} />
          </>
        )}
      </Container>
    </Layout>
  )
}

export default JobProfile
