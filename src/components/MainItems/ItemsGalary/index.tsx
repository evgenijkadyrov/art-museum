import { FC } from 'react'
import { Item } from '@components/MainItems/ItemsGalary/Item'
import { ArtworkWithImage } from '@components/ContentHomePage'
import { WrapperItemsList } from './styles'

interface ItemsListProps {
  data: ArtworkWithImage[]
  isLoading: boolean
}

export const ItemsList: FC<ItemsListProps> = ({ data, isLoading }) => {
  return (
    <WrapperItemsList>
      {data.map((el) => {
        return <Item el={el} key={el.id} isLoading={isLoading} />
      })}
    </WrapperItemsList>
  )
}
