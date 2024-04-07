import { Container, Logo, MuseumName, Navigation, StyledHeader } from './styles'
import { LogoMuseum } from '@/assets/LogoMuseum'

export function Header() {
  return (
    <StyledHeader>
      <Container>
        <Logo>
          <LogoMuseum height={50} width={45} />
          <MuseumName color="white">
            Museum of
            <span>Art</span>
          </MuseumName>
        </Logo>
        <Navigation>Your favorites</Navigation>
      </Container>
    </StyledHeader>
  )
}
