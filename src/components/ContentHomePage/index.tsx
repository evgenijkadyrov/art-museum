import { StyledContent, Wrapper } from './styles'
import { ItemsList } from '@components/MainItems/ItemsGalary'
import { TitlePage } from '@/common/TitlePage'
import { useState } from 'react'
import { Pagination } from '@components/MainItems/Pagination'
import { TitleGallery } from '@/common/TitleForGallery'
import { MAX_LENGTH_PAGINATION } from '@/constants/constants'
import { AdditionalItems } from '@components/AdditionalItems'
import { SearchArtworkForm } from '@components/SearchField/Search'
import { useFetchRecommendedArtData } from '@/hooks/useFetchRecommendedArtData'
import { useFetchArtList } from '@/hooks/useFetchArtList'
import { useHandlePagination } from '@/hooks/useHandlePagination'
import { useToggleFavoriteArt } from '@/hooks/useToggleFavoriteArt'
import { useSearchArtworks } from '@/hooks/useSearchArtworks'
import SortComponent from '@components/SortingItems'

export const Content = () => {
  const [searchValue, setSearchValue] = useState('')
  const { favorites, handleClickFavorite } = useToggleFavoriteArt()
  const { currentPage, handlePageChange } = useHandlePagination()
  const { artList, isLoading, allPage, currentArtworksPage, setArtList } =
    useFetchArtList(currentPage)
  const { artworksRecommended } = useFetchRecommendedArtData()
  const { filteredArtList, totalSearchPage, currentSearchPage } = useSearchArtworks(
    searchValue,
    currentPage
  )
  // console.log('sear', !!searchValue)
  // console.log('artlis', artList)
  console.log('filteredArtList', filteredArtList)

  return (
    <Wrapper>
      <StyledContent>
        <TitlePage firstLine={'Lets Find Some '} secondLine={'Here!'} isActive={true} />
        <SearchArtworkForm setSearchValue={setSearchValue} />
        <TitleGallery firstLineText={'Topics for you'} secondLineText={'Our special gallery'} />
        <SortComponent data={artList} setData={setArtList} />
        <ItemsList
          data={searchValue ? filteredArtList : artList}
          isLoading={isLoading}
          favorites={favorites}
          handleClickFavorite={handleClickFavorite}
        />
        <Pagination
          currentPage={searchValue ? currentSearchPage : currentArtworksPage}
          lastPage={searchValue ? totalSearchPage : allPage}
          maxLength={MAX_LENGTH_PAGINATION}
          setCurrentPage={handlePageChange}
        />
        <TitleGallery firstLineText={'Here some more'} secondLineText={'Other works for you'} />
        <AdditionalItems
          data={artworksRecommended}
          isLoading={isLoading}
          isFavoritesPage={false}
          favorites={favorites}
          handleClickFavorite={handleClickFavorite}
        />
      </StyledContent>
    </Wrapper>
  )
}
