import { Container, Logo, MuseumName, Navigation, StyledHeader, StyledLink } from './styles'
import { LogoMuseum } from '@/assets/icons/LogoMuseum'

export const Header = () => (
  <StyledHeader>
    <Container>
      <Logo>
        <LogoMuseum height={50} width={45} />
        <MuseumName color="white">
          Museum of
          <span>Art</span>
        </MuseumName>
      </Logo>

      <Navigation>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/favorites'}>Your favorites</StyledLink>
        <StyledLink to={'/info'}>Info</StyledLink>
      </Navigation>
    </Container>
  </StyledHeader>
)
