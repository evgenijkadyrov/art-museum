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
import { LogoMuseum } from '@/assets/icons/LogoMuseum'
import { BurgerMenu } from '@/common/BurgerMenu'
import { useState } from 'react'
import { colors } from '@/constants/colors'
import { CloseIcon } from '@/assets/icons/CloseIcon'

export const Header = () => {
  const [open, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }

  return (
    <StyledHeader>
      <Container>
        <Logo>
          <BurgerMenu open={open} onClose={onClose}>
            <CloseIconContainer onClick={() => setOpen(false)}>
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
          <LogoMuseumContainer onClick={() => setOpen(true)}>
            <LogoMuseum height={50} width={45} />
          </LogoMuseumContainer>

          <MuseumName color="white" onClick={() => setOpen(true)}>
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
