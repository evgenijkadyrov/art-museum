import { useState } from 'react'

import { CloseIcon } from '@/assets/icons/CloseIcon'
import { LogoMuseum } from '@/assets/icons/LogoMuseum'
import { BurgerMenu } from '@/common/BurgerMenu'
import { colors } from '@/constants/colors'

import {
  CloseIconContainer,
  Container,
  Logo,
  LogoMuseumContainer,
  MuseumName,
  Navigation,
  StyledBurgerLink,
  StyledHeader,
  StyledLink,
  WrapperLink,
} from './styles'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <StyledHeader>
      <Container>
        <Logo>
          <BurgerMenu open={isOpen} onClose={onClose}>
            <CloseIconContainer onClick={() => setIsOpen(false)}>
              <CloseIcon height={36} width={36} />
            </CloseIconContainer>
            <WrapperLink>
              <StyledBurgerLink to={'/'} color={colors.primary}>
                Home
              </StyledBurgerLink>
              <StyledBurgerLink to={'/favorites'} color={colors.primary}>
                Your favorites
              </StyledBurgerLink>
            </WrapperLink>
          </BurgerMenu>

          <LogoMuseumContainer onClick={() => setIsOpen(true)} showMenu={isOpen}>
            <LogoMuseum height={45} width={40} />
          </LogoMuseumContainer>
          <MuseumName color="white" onClick={() => setIsOpen(true)}>
            Museum of
            <span>Art</span>
          </MuseumName>
        </Logo>
        <Navigation>
          <StyledLink to={'/'} color={colors.white}>
            Home
          </StyledLink>
          <StyledLink to={'/favorites'} color={colors.white}>
            Your favorites
          </StyledLink>
        </Navigation>
      </Container>
    </StyledHeader>
  )
}
