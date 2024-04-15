import { Item } from '@components/MainItems/ItemsGalary/Item'
import { WrapperItemsList } from './styles'
import { ArtworkByIdWithImage } from '@/types/interfaces'

interface ItemsListProps {
  data: ArtworkByIdWithImage[]
  isLoading: boolean
  favorites: ArtworkByIdWithImage[]
  handleClickFavorite: (el: ArtworkByIdWithImage) => void
}

export const ItemsList = ({ data, isLoading, favorites, handleClickFavorite }: ItemsListProps) => {
  return (
    <WrapperItemsList>
      {data.map((el) => {
        return (
          <Item
            el={el}
            key={el.id}
            isLoading={isLoading}
            favorites={favorites}
            handleClickFavorite={handleClickFavorite}
          />
        )
      })}
    </WrapperItemsList>
  )
}
