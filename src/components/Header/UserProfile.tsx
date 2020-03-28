import React, { useContext, useEffect, useState } from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import styled from 'styled-components'

import HTTPClientContext from 'utils/httpClient'
import { skeletonId } from './constants'

type Profile = {
  firstName: string
  lastName: string
}

const ProfileContainer = styled.div`
  text-align: right;
`

const UserProfile = () => {
  const axios = useContext(HTTPClientContext)

  const [userProfile, setUserProfile] = useState<Profile | undefined>(undefined)

  useEffect(() => {
    async function getProfile() {
      const response = await axios.get('/profile')

      setUserProfile(response.data)
    }

    getProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {!userProfile && <Skeleton data-testid={skeletonId} variant="text" />}
      {!!userProfile && (
        <ProfileContainer>
          {userProfile.firstName} {userProfile.lastName}
        </ProfileContainer>
      )}
    </>
  )
}

export default UserProfile
