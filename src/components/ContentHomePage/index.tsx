import { StyledContent, Wrapper } from './styles'
import { ItemsList } from '@components/MainItems/ItemsGalary'
import { TitleGallery } from '@/common/TitleForGallery'
import { AdditionalItems } from '@components/AdditionalItems'
import { TitlePage } from '@/common/TitlePage'
import { Artwork } from '@/api/api'
import { useFetchArtData } from '@/hooks/useFetchArtData'
import { useFetchRecommendedArtData } from '@/hooks/useFetchRecommendedArtData'
import { useState } from 'react'
import { Pagination } from '@components/MainItems/Pagination'
import { MAX_LENGTH_PAGINATION, PAGE_NUMBER_DEFAULT } from '@/constants/constants'
import { useFetchPaginationInfo } from '@/hooks/useFetchPaginationInfo'
import { SearchArtworkForm } from '@components/SearchField/Search'

export interface ArtworkWithImage extends Artwork {
  image_url: string
}

export function Content() {
  const [currentPage, setCurrentPage] = useState<number>(PAGE_NUMBER_DEFAULT)
  const { artworks, isLoading } = useFetchArtData(currentPage)
  const { artworksRecommended } = useFetchRecommendedArtData()
  const { totalPage } = useFetchPaginationInfo()

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  return (
    <Wrapper>
      <StyledContent>
        <TitlePage firstLine={'Lets Find Some '} secondLine={'Here!'} isActive />
        <SearchArtworkForm />
        <TitleGallery firstLineText={'Topics for you'} secondLineText={'Our special gallery'} />

        <ItemsList data={artworks} isLoading={isLoading} />
        <Pagination
          currentPage={currentPage}
          lastPage={totalPage}
          maxLength={MAX_LENGTH_PAGINATION}
          setCurrentPage={handlePageChange}
        />
        <TitleGallery firstLineText={'Here some more'} secondLineText={'Other works for you'} />
        <AdditionalItems data={artworksRecommended} isLoading={isLoading} />
      </StyledContent>
    </Wrapper>
  )
}
