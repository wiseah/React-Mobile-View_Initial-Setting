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

function Main() {
  return (
    <Container>
      <Content>
        메인 페이지입니다. <br/>
        Header에 있는 이전 버튼(BiChevronLeft)을 클릭하면 '/'경로로 이동하게 됩니다. <br/>
        경로를 변경하고 싶다면 routes.js에 "previous: '/'," 이 부분을 원하는 경로로 바꿔주세요. 
      </Content>
    </Container>
  )
}

export default Main
