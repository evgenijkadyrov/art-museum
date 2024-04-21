import { StyledContent, Wrapper } from './styles'
import { ItemsList } from '@components/MainItems/ItemsGalary'
import { TitlePage } from '@/common/TitlePage'
import { useEffect, useState } from 'react'
import { Pagination } from '@components/MainItems/Pagination'
import { TitleGallery } from '@/common/TitleForGallery'
import { MAX_LENGTH_PAGINATION } from '@/constants/constants'
import { AdditionalItems } from '@components/AdditionalItems'
import { SearchArtworkForm } from '@components/SearchField'
import { useFetchRecommendedArtData } from '@/hooks/useFetchRecommendedArtData'
import { useFetchArtList } from '@/hooks/useFetchArtList'
import { useHandlePagination } from '@/hooks/useHandlePagination'
import { useToggleFavoriteArt } from '@/hooks/useToggleFavoriteArt'
import { useSearchArtworks } from '@/hooks/useSearchArtworks'
import { SortComponent } from '@components/SortingItems'

export const Content = () => {
  const [searchValue, setSearchValue] = useState('')
  const { favorites, handleClickFavorite } = useToggleFavoriteArt()
  const { currentPage, handlePageChange } = useHandlePagination()
  const { artList, isLoading, allPage, currentArtworksPage, setArtList } =
    useFetchArtList(currentPage)
  const { artworksRecommended } = useFetchRecommendedArtData()
  const {
    filteredArtList,
    totalSearchPage,
    setFilteredArtList,
    isLoading: isSearchLoading,
  } = useSearchArtworks(searchValue, currentPage)
  useEffect(() => {
    if (searchValue) {
      handlePageChange(1)
    }
  }, [searchValue])
  return (
    <Wrapper>
      <StyledContent>
        <TitlePage firstLine={'Lets Find Some '} secondLine={'Here!'} isActive={true} />
        <SearchArtworkForm setSearchValue={setSearchValue} />
        <TitleGallery firstLineText={'Topics for you'} secondLineText={'Our special gallery'} />
        <SortComponent
          data={searchValue ? filteredArtList : artList}
          setData={searchValue ? setFilteredArtList : setArtList}
        />
        <ItemsList
          data={searchValue ? filteredArtList : artList}
          isLoading={searchValue ? isSearchLoading : isLoading}
          favorites={favorites}
          handleClickFavorite={handleClickFavorite}
        />
        <Pagination
          // currentPage={searchValue ? currentSearchPage : currentArtworksPage}
          currentPage={currentArtworksPage}
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
