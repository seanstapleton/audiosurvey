import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1` margin: 0;`
const P = styled.p``
const Button = styled.button`
  background: #de6262;
  color: white;
  border-radius: 10px;
  padding: 1rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-width: 0px;
  transition: all 200ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`

const Card = styled.div`
  width: 24rem;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const CardWrapper = styled.div`
  position: fixed;
  bottom: 0; top:0; right: 0; left: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

class IndexComp extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <CardWrapper>
      <Card>
        <H1>Audio Survey</H1>
        <P>Take a survey by listening and responding back!</P>
        <Button>Take it Now</Button>
      </Card>
    </CardWrapper>
  }
}

export default IndexComp
