import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '@/constants/colors'
import { ReactNode } from 'react'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 85px;
  background-color: rgb(54, 53, 53);
`
export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 490px) {
    width: 85%;
  }
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  max-width: 206px;
  max-height: 127px;
  padding: 5px;
`
export const MuseumName = styled.div`
  color: ${(props) => props.color};
  display: flex;
  align-self: end;
  padding: 5px;
  cursor: pointer;

  span {
    margin-left: 5px;
    font-weight: bold;
    color: ${colors.gold};
  }

  @media (max-width: 390px) {
    font-size: 0.75rem;
  }
`
export const Navigation = styled.nav`
  display: flex;
  margin-top: 30px;
  gap: 2rem;
  align-items: center;
  align-content: end;
  @media (max-width: 390px) {
    margin-right: 5px;
  }
`

interface StyledLinkProps {
  color?: string
  children: ReactNode
  to: string
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  font-size: 1.25rem;
  color: ${({ color }) => color};
  @media (max-width: 390px) {
    font-size: 1rem;
    display: none;
  }
`
export const WrapperLink = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const StyledBurgerLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: ${({ color }) => color};
  font-size: 2.25rem;
  margin-bottom: 40px;
`
export const CloseIconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`
export const LogoMuseumContainer = styled.div`
  cursor: pointer;
`
