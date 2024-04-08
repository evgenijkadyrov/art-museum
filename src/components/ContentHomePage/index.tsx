import { StyledContent, Wrapper } from './styles'
import { Title } from '@components/Title'
import { SearchForm } from '@components/SearchField'
import { ItemsList } from '@components/MainItems/ItemsGalary'
import { Pagination } from '@components/MainItems/Pagination'
import { TitleGallery } from '@/common/TitleForGallery'
import { AdditionalItems } from '@components/AdditionalItems'
const data = [
  {
    id: 6010,
    title: 'Number 19',
    artist_title: 'Mark Rothko',
    image_id: '0a0e16c5-8510-bb2d-b2ca-424feae48d5c',
  },
  {
    id: 2816,
    title: 'Interior at Nice',
    artist_title: 'Henri Matisse',
    image_id: '2193cdda-2691-2802-0776-145dee77f7ea',
  },
  {
    id: 14598,
    title: 'The Beach at Sainte-Adresse',
    artist_title: 'Claude Monet',
    image_id: '95be2572-b53d-8e7b-abc9-10eb48d4fa5d',
  },
]
// https://www.artic.edu/iiif/2/{identifier}/full/843,/0/default.jpg
export function Content() {
  return (
    <Wrapper>
      <StyledContent>
        <Title firstLineText={"Let's Find Some"} secondLineText={'Here!'} />
        <SearchForm />
        <TitleGallery firstLineText={'Topics for you'} secondLineText={'Our special gallery'} />
        <ItemsList data={data} />
        <Pagination />
        <TitleGallery firstLineText={'Here some more'} secondLineText={'Other works for you'} />
        <AdditionalItems />
      </StyledContent>
    </Wrapper>
  )
}
