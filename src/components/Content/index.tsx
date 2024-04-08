import { StyledContent, Wrapper } from './styles'
import { Title } from '@components/Title'
import { SearchForm } from '@components/SearchField'
export function Content() {
  return (
    <Wrapper>
      <StyledContent>
        <Title firstLineText={"Let's Find Some"} secondLineText={'Here!'} />
        <SearchForm />
      </StyledContent>
    </Wrapper>
  )
}
