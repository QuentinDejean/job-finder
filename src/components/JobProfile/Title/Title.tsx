import React from 'react'
import styled from 'styled-components'

type Title = {
  name: string
  imageUrl: string
}

type Props = Title & {
  companyName: string
}

const Container = styled.div`
  padding: 0px 15px;
`

const Image = styled.img`
  height: auto;
  width: 100%;
`

const Name = styled.div`
  font-weight: bold;
  padding: 10px 0px;
`

const Title = ({ companyName, imageUrl, name }: Props) => {
  return (
    <>
      <div>
        <Image src={imageUrl} />
      </div>
      <Container>
        <Name>
          {name} <br /> <small>{companyName}</small>
        </Name>
      </Container>
    </>
  )
}

export type { Title }
export default Title
