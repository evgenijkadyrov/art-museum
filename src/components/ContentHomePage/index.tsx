import { StyledContent, Wrapper } from './styles'
import { SearchForm } from '@components/SearchField'
import { ItemsList } from '@components/MainItems/ItemsGalary'
import { Pagination } from '@components/MainItems/Pagination'
import { TitleGallery } from '@/common/TitleForGallery'
import { AdditionalItems } from '@components/AdditionalItems'
import { TitlePage } from '@/common/TitlePage'
import { Artwork } from '@/api/api'
import { useFetchArtData } from '@/hooks/useFetchArtData'
import { useFetchRecommendedArtData } from '@/hooks/useFetchRecommendedArtData'

export interface ArtworkWithImage extends Artwork {
  image_url: string
}

export function Content() {
  const { artworks, isLoading } = useFetchArtData()
  const { artworksRecommended } = useFetchRecommendedArtData()

  return (
    <Wrapper>
      <StyledContent>
        <TitlePage firstLine={'Lets Find Some '} secondLine={'Here!'} isActive />
        <SearchForm />
        <TitleGallery firstLineText={'Topics for you'} secondLineText={'Our special gallery'} />
        {isLoading && <p>LOAding</p>}
        <ItemsList data={artworks} />
        <Pagination />
        <TitleGallery firstLineText={'Here some more'} secondLineText={'Other works for you'} />
        <AdditionalItems data={artworksRecommended} />
      </StyledContent>
    </Wrapper>
  )
}
