import { StyledContent, Wrapper } from './styles'
import { ItemsList } from '@components/MainItems/ItemsGalary'
import { TitleGallery } from '@/common/TitleForGallery'
import { AdditionalItems } from '@components/AdditionalItems'
import { TitlePage } from '@/common/TitlePage'
import { Artwork, SearchArtWork } from '@/api/api'
import { useFetchArtData } from '@/hooks/useFetchArtData'
import { useFetchRecommendedArtData } from '@/hooks/useFetchRecommendedArtData'
import { useState } from 'react'
import { Pagination } from '@components/MainItems/Pagination'
import { MAX_LENGTH_PAGINATION, PAGE_NUMBER_DEFAULT } from '@/constants/constants'
import { SearchArtworkForm } from '@components/SearchField/Search'

export interface ArtworkWithImage extends Artwork {
  image_url: string
}

export function Content() {
  const [currentPage, setCurrentPage] = useState<number>(PAGE_NUMBER_DEFAULT)
  const [searchResults, setSearchResults] = useState<{
    data: SearchArtWork[]
    totalSearchPage: number
  }>({
    data: [],
    totalSearchPage: 0,
  })
  const { artworks, isLoading, totalPage } = useFetchArtData(
    currentPage,
    !!searchResults.data.length
  )
  const { artworksRecommended } = useFetchRecommendedArtData()

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
  }

  return (
    <Wrapper>
      <StyledContent>
        <TitlePage firstLine={'Lets Find Some '} secondLine={'Here!'} isActive />
        <SearchArtworkForm
          searchResultsState={[searchResults, setSearchResults]}
          page={currentPage}
          handlePageChange={handlePageChange}
        />
        <TitleGallery firstLineText={'Topics for you'} secondLineText={'Our special gallery'} />

        <ItemsList
          data={searchResults.data.length > 0 ? searchResults.data : artworks}
          isLoading={isLoading}
          isSearch={searchResults.data.length > 0}
        />
        <Pagination
          currentPage={currentPage}
          lastPage={searchResults.data.length > 0 ? searchResults.totalSearchPage : totalPage}
          maxLength={MAX_LENGTH_PAGINATION}
          setCurrentPage={handlePageChange}
        />
        <TitleGallery firstLineText={'Here some more'} secondLineText={'Other works for you'} />
        <AdditionalItems data={artworksRecommended} isLoading={isLoading} />
      </StyledContent>
    </Wrapper>
  )
}
