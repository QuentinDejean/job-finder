import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import Header from './Header/Header'
import UserContext from 'utils/user'

const AppContainer = styled.section`
  background-color: #f9f7fc;
  margin-top: 10vh;
`

const userId = '7f90df6e-b832-44e2-b624-3143d428001f'

function App() {
  return (
    <UserContext.Provider value={userId}>
      <Container maxWidth="xs">
        <AppContainer>
          <Header />
        </AppContainer>
      </Container>
    </UserContext.Provider>
  )
}

export default App
