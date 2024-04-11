import { BookMark } from '@/assets/icons/BookMark'
import { useNavigate } from 'react-router-dom'
import {
  AdditionalItem,
  FavoritesIcon,
  Image,
  ItemAuthor,
  ItemTitle,
  Status,
  WrapperAdditionalItems,
  WrapperContainer,
} from '@components/AdditionalItems/styles'
import { LoadingSpinner } from '@components/Loader'

import { useToggleFavoriteArt } from '@/hooks/useToggleFavoriteArt'
import { ArtworkByIdWithImage } from '@/types/interfaces'

interface AdditionalItemsProps {
  data: ArtworkByIdWithImage[]
  isLoading: boolean
  isFavoritesPage: boolean
}

export const AdditionalItems = ({ data, isLoading, isFavoritesPage }: AdditionalItemsProps) => {
  const { favorites, handleClickFavorite } = useToggleFavoriteArt()
  const navigate = useNavigate()
  const handleClickImage = (id: number) => () => {
    navigate(`/${id}`)
  }
  const dataToShow = isFavoritesPage ? favorites : data
  return (
    <WrapperAdditionalItems>
      {dataToShow.map((el) => (
        <AdditionalItem key={el.id}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Image background_url={el.imageUrl} onClick={handleClickImage(el.id)} />
          )}
          <WrapperContainer>
            <ItemTitle>{el.title}</ItemTitle>
            <ItemAuthor>{el.artist_title}</ItemAuthor>
            <Status>Public</Status>
          </WrapperContainer>
          <FavoritesIcon onClick={() => handleClickFavorite(el)}>
            <BookMark isActive={favorites.some((favorite) => favorite.id === el.id)} />
          </FavoritesIcon>
        </AdditionalItem>
      ))}
    </WrapperAdditionalItems>
  )
}
