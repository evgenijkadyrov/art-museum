import { BookMark } from '@/assets/BookMark'
import {
  Favorites,
  ItemAuthor,
  ItemTitle,
  Status,
  WrapperContainer,
  WrapperItemInfo,
} from '@components/MainItems/ItemsGalary/Item/ItemInfo/styles'
import { ArtworkWithImage } from '@components/ContentHomePage'
import { SearchArtWork } from '@/api/api'
interface ItemInfoProps {
  title: string
  artist_title: string
}
export const ItemInfo = ({ title, artist_title }: ItemInfoProps) => {
  return (
    <WrapperItemInfo>
      <WrapperContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemAuthor> {artist_title}</ItemAuthor>
        <Status>Public</Status>
      </WrapperContainer>

      <Favorites>
        <BookMark />
      </Favorites>
    </WrapperItemInfo>
  )
}
