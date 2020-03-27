import React from 'react'
import styled from 'styled-components'
import { Container } from '@material-ui/core'
import Header from './Header/Header'

const AppContainer = styled.section`
  background-color: #f9f7fc;
  margin-top: 10vh;
`

function App() {
  return (
    <Container maxWidth="xs">
      <AppContainer>
        <Header />
      </AppContainer>
    </Container>
  )
}

export default App
