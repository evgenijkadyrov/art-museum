import { Container, Modsen, StyledFooter } from './styles'
import { Logo, MuseumName } from '@components/Header/styles'
import ModsenImage from '@assets/modsen.png'

import { LogoMuseum } from '@/assets/LogoMuseum'

export function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Logo>
          <LogoMuseum height={50} width={45} />
          <MuseumName color="black">
            Museum of
            <span>Art</span>
          </MuseumName>
        </Logo>
        <Modsen src={ModsenImage} />
      </Container>
    </StyledFooter>
  )
}
