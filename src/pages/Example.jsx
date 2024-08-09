import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  width: 90%;
`

function Example() {
  return (
    <Container>
      <Content>
        pages폴더에 페이지를 추가하고 routes에 페이지 경로를 적어주세요!
      </Content>
    </Container>
  )
}

export default Example
