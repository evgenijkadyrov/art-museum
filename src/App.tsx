import { Header } from '@components/Header'
import { Content } from '@components/Content'
import { Footer } from '@components/Footer'
import { AppStyled } from './styles'

function App() {
  return (
    <AppStyled>
      <Header />
      <Content />
      <Footer />
    </AppStyled>
  )
}

export default App
