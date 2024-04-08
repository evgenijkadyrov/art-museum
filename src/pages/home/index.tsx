import { Header } from '@components/Header'
import { Content } from '@components/ContentHomePage'
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
