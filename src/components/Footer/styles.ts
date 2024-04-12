import styled from 'styled-components'
import { colors } from '@/constants/colors'
import { WIDTH_DISPLAY } from '@/globalStyles'

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${colors.white};
  margin-top: auto;
`
export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 127px;
`
export const Modsen = styled.img`
  width: ${WIDTH_DISPLAY * 0.13}px;
  height: ${WIDTH_DISPLAY}*0.05px;
`
