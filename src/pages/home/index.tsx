import { Header } from '@components/Header'
import { Content } from '@components/ContentHomePage'
import { Footer } from '@components/Footer'
import { HomeStyled } from '@/pages/home/styles'
import { ErrorBoundary } from '@components/ErrorBoundary'

export const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <ErrorBoundary>
        <Content />
      </ErrorBoundary>
      <Footer />
    </HomeStyled>
  )
}
