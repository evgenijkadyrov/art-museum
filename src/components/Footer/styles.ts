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
  align-items: end;
  height: 85px;
  @media (max-width: 390px) {
    height: 70px;
    width: 85%;
  }
`
export const Modsen = styled.img`
  width: ${WIDTH_DISPLAY} * 0.13px;
  height: ${WIDTH_DISPLAY}*0.05px;

  @media (max-width: 390px) {
    width: 80px;
    height: 30px;
  }
`
