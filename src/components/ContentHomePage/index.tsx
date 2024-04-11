import { StyledContent, Wrapper } from './styles'
import { ItemsList } from '@components/MainItems/ItemsGalary'
import { TitlePage } from '@/common/TitlePage'
import { useState } from 'react'
import { Pagination } from '@components/MainItems/Pagination'
import { TitleGallery } from '@/common/TitleForGallery'
import { ART_FOR_PAGE, MAX_LENGTH_PAGINATION } from '@/constants/constants'
import { totalPageNumber } from '@/utils/generatePageCount'
import { AdditionalItems } from '@components/AdditionalItems'
import { SearchArtworkForm } from '@components/SearchField/Search'
import {
  ArtworkRecWithImageProps,
  useFetchRecommendedArtData,
} from '@/hooks/useFetchRecommendedArtData'
import { calculateCurrentItems } from '@/utils/calculateCurrentItems'
import { useFilteredArtList } from '@/hooks/useFiltredArtList'
import { useFetchArtList } from '@/hooks/useFetchArtList'
import { useHandlePageChange } from '@/hooks/useHandlePageChange'

export interface ArtworkWithImage extends ArtList {
  image_url: string
}

export interface ArtList {
  date_start: number
  date_end: number
  place_of_origin: string
  dimensions: string | null
  credit_line: string
  copyright_notice: string | null
  id: number
  title: string
  artist_title: string
  image_id: string
  isLoading: boolean
}

export const Content = () => {
  const [filter, setFilter] = useState('')
  const { currentPage, setCurrentPage, handlePageChange } = useHandlePageChange()
  const { artList, isLoading } = useFetchArtList()
  const { artworksRecommended } = useFetchRecommendedArtData<ArtworkRecWithImageProps[]>()
  const { filteredArtList } = useFilteredArtList(filter, artList)

  const currentItems = calculateCurrentItems(artList, ART_FOR_PAGE, currentPage)
  const currentItemsFilter = calculateCurrentItems(filteredArtList, ART_FOR_PAGE, currentPage)

  return (
    <Wrapper>
      <StyledContent>
        <TitlePage firstLine={'Lets Find Some '} secondLine={'Here!'} isActive />
        <SearchArtworkForm setFilter={setFilter} setCurrentPage={setCurrentPage} />
        <TitleGallery firstLineText={'Topics for you'} secondLineText={'Our special gallery'} />
        <ItemsList data={filter ? currentItemsFilter : currentItems} isLoading={isLoading} />
        <Pagination
          currentPage={currentPage}
          lastPage={totalPageNumber(filter ? filteredArtList.length : artList.length, ART_FOR_PAGE)}
          maxLength={MAX_LENGTH_PAGINATION}
          setCurrentPage={handlePageChange}
        />
        <TitleGallery firstLineText={'Here some more'} secondLineText={'Other works for you'} />
        <AdditionalItems data={artworksRecommended} isLoading={isLoading} />
      </StyledContent>
    </Wrapper>
  )
}
