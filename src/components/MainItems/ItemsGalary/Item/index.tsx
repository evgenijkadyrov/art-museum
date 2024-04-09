import { ItemInfo } from '@components/MainItems/ItemsGalary/Item/ItemInfo'
import { Image, WrapperItem } from './styles'

export const Item = ({ el }) => {
  return (
    <WrapperItem>
      <Image background_url={el.image_url} />
      <ItemInfo info={el}></ItemInfo>
    </WrapperItem>
  )
}
