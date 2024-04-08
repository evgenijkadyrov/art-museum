import { Item } from '@components/MainItems/ItemsGalary/Item'
import { WrapperItemsList } from './styles'

export const ItemsList = ({ data }) => {
  return (
    <WrapperItemsList>
      {data.map((el) => {
        return <Item el={el} key={el.id} />
      })}
    </WrapperItemsList>
  )
}
