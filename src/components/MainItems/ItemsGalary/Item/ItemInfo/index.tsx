import { BookMark } from '@/assets/BookMark'
import {
  Favorites,
  ItemAuthor,
  ItemTitle,
  Status,
  WrapperContainer,
  WrapperItemInfo,
} from '@components/MainItems/ItemsGalary/Item/ItemInfo/styles'

export const ItemInfo = ({ info }) => {
  return (
    <WrapperItemInfo>
      <WrapperContainer>
        <ItemTitle>{info.title}</ItemTitle>
        <ItemAuthor> {info.artist_title}</ItemAuthor>
        <Status>Public</Status>
      </WrapperContainer>

      <Favorites>
        <BookMark />
      </Favorites>
    </WrapperItemInfo>
  )
}
