import { BookMark } from '@/assets/icons/BookMark'
import {
  FavoritesIcon,
  ItemAuthor,
  ItemTitle,
  Status,
  WrapperContainer,
  WrapperItemInfo,
} from '@components/MainItems/ItemsGalary/Item/ItemInfo/styles'

import { useToggleFavoriteArt } from '@/hooks/useToggleFavoriteArt'
import { ArtworkByIdWithImage } from '@/types/interfaces'

interface ItemInfoProps {
  data: ArtworkByIdWithImage
}

export const ItemInfo = ({ data }: ItemInfoProps) => {
  const { favorites, handleClickFavorite } = useToggleFavoriteArt()
  return (
    <WrapperItemInfo>
      <WrapperContainer>
        <ItemTitle>{data.title}</ItemTitle>
        <ItemAuthor> {data.artist_title}</ItemAuthor>
        <Status>Public</Status>
      </WrapperContainer>

      <FavoritesIcon onClick={() => handleClickFavorite(data)}>
        <BookMark isActive={favorites.some((favorite) => favorite.id === data.id)} />
      </FavoritesIcon>
    </WrapperItemInfo>
  )
}
