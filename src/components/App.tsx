import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import UserContext from 'utils/user'

const AppContainer = styled.section`
  background-color: #f9f7fc;
`

const userId = '7f90df6e-b832-44e2-b624-3143d428001f'

type Props = {
  children: React.ReactNode
}

function App({ children }: Props) {
  return (
    <UserContext.Provider value={userId}>
      <Container maxWidth="xs">
        <AppContainer>
          <>{children}</>
        </AppContainer>
      </Container>
    </UserContext.Provider>
  )
}

export default App
