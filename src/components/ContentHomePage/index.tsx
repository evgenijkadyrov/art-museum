import { StyledContent, Wrapper } from './styles'
import { ItemsList } from '@components/MainItems/ItemsGalary'
import { TitlePage } from '@/common/TitlePage'
import { useState } from 'react'
import { Pagination } from '@components/MainItems/Pagination'
import { TitleGallery } from '@/common/TitleForGallery'
import { ART_FOR_PAGE, MAX_LENGTH_PAGINATION } from '@/constants/constants'
import { totalPageNumber } from '@/utils/calcTotalPage.helper'
import { AdditionalItems } from '@components/AdditionalItems'
import { SearchArtworkForm } from '@components/SearchField/Search'
import { useFetchRecommendedArtData } from '@/hooks/useFetchRecommendedArtData'
import { getItemsPerPageHelper } from '@/utils/getItemsPerPage.helper'
import { useFilteredArtList } from '@/hooks/useFiltredArtList'
import { useFetchArtList } from '@/hooks/useFetchArtList'
import { useHandlePagination } from '@/hooks/useHandlePagination'

export const Content = () => {
  const [searchValue, setSearchValue] = useState('')

  const { currentPage, setCurrentPage, handlePageChange } = useHandlePagination()
  const { artList, isLoading } = useFetchArtList()
  const { artworksRecommended } = useFetchRecommendedArtData()
  const { filteredArtList } = useFilteredArtList(searchValue, artList)

  const currentItems = getItemsPerPageHelper(artList, ART_FOR_PAGE, currentPage)
  const currentItemsFilter = getItemsPerPageHelper(filteredArtList, ART_FOR_PAGE, currentPage)

  return (
    <Wrapper>
      <StyledContent>
        <TitlePage firstLine={'Lets Find Some '} secondLine={'Here!'} isActive={true} />
        <SearchArtworkForm setSearchValue={setSearchValue} setCurrentPage={setCurrentPage} />
        <TitleGallery firstLineText={'Topics for you'} secondLineText={'Our special gallery'} />
        <ItemsList data={searchValue ? currentItemsFilter : currentItems} isLoading={isLoading} />
        <Pagination
          currentPage={currentPage}
          lastPage={totalPageNumber(
            searchValue ? filteredArtList.length : artList.length,
            ART_FOR_PAGE
          )}
          maxLength={MAX_LENGTH_PAGINATION}
          setCurrentPage={handlePageChange}
        />
        <TitleGallery firstLineText={'Here some more'} secondLineText={'Other works for you'} />
        <AdditionalItems data={artworksRecommended} isLoading={isLoading} isFavoritesPage={false} />
      </StyledContent>
    </Wrapper>
  )
}
