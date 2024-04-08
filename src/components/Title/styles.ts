import styled from 'styled-components'

export const TextWrapper = styled.div`
  display: flex;
  padding-top: 120px;
  margin-bottom: 78px;
  flex-direction: column;
  align-items: center;
  font-size: 48px;
  font-weight: bold;
  color: #393939;
`

export const FirstLine = styled.span`
  color: ${(props) => props.color || '#393939'};
  span {
    margin-left: 5px;
    margin-right: 5px;
    color: #F17900
`

export const SecondLine = styled.span`
  color: ${(props) => props.color || '#393939'};
`
