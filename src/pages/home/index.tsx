import { Header } from '@components/Header'
import { Content } from '@components/ContentHomePage'
import { Footer } from '@components/Footer'
import { HomeStyled } from '@/pages/home/styles'
import { ErrorBoundary } from '@components/ErrorBoundary'

export const Home = () => {
  return (
    <Layout>
      <Content />
    </Layout>
  )
}
export const Layout = ({ children }) => {
  return (
    <HomeStyled>
      <Header />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </HomeStyled>
  )
}
