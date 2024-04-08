import { Header } from '@components/Header'
import { Content } from '@components/Content'
import { Footer } from '@components/Footer'
import { HomeStyled } from '@/pages/home/styles'

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <Content />
      <Footer />
    </HomeStyled>
  )
}
