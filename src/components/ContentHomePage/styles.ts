import styled from 'styled-components'
import { colors } from '@/constants/colors'

export const Wrapper = styled.div`
  background-color: ${colors.background};
`
export const StyledContent = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 1280px;
  margin: 0 auto;
`
