import { Item } from '@components/MainItems/ItemsGalary/Item'
import { WrapperItemsList } from './styles'
import { ArtworkByIdWithImage } from '@/types/interfaces'

interface ItemsListProps {
  data: ArtworkByIdWithImage[]
  isLoading: boolean
}

export const ItemsList = ({ data, isLoading }: ItemsListProps) => {
  return (
    <WrapperItemsList>
      {data.map((el) => {
        return <Item el={el} key={el.id} isLoading={isLoading} />
      })}
    </WrapperItemsList>
  )
}
