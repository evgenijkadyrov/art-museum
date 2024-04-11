import { FC } from 'react'
import { Item } from '@components/MainItems/ItemsGalary/Item'
import { ArtworkWithImage } from '@components/ContentHomePage'
import { WrapperItemsList } from './styles'
import { SearchArtWork } from '@/api/api'

interface ItemsListProps {
  data: ArtworkWithImage[] | SearchArtWork[]
  isLoading: boolean
  isSearch: boolean
}

export const ItemsList: FC<ItemsListProps> = ({ data, isLoading, isSearch }) => {
  return (
    <WrapperItemsList>
      {data.map((el) => {
        return <Item el={el} key={el.id} isLoading={isLoading} />
      })}
    </WrapperItemsList>
  )
}
