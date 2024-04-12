import styled from 'styled-components'
import { colors } from '@/constants/colors'

export const TextWrapper = styled.div`
  display: flex;
  padding-top: 120px;
  margin-bottom: 78px;
  flex-direction: column;
  align-items: center;
  font-size: 64px;
  font-weight: bold;
  color: ${colors.primary};
`

export const FirstLine = styled.span`
  &.active::after {
    content: 'Art';
    color: ${colors.secondary};
  }
`
export const SecondLine = styled.span`
  &.active {
    color: ${colors.secondary};
  }
`
