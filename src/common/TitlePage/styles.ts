import styled from 'styled-components'

export const TextWrapper = styled.div`
  display: flex;
  padding-top: 120px;
  margin-bottom: 78px;
  flex-direction: column;
  align-items: center;
  font-size: 64px;
  font-weight: bold;
  color: rgb(57, 57, 57);
`

export const FirstLine = styled.span`
  &.active::after {
    content: 'Art';
    color: #f17900;
  }
`
export const SecondLine = styled.span`
  &.active {
    color: #f17900;
  }
`
