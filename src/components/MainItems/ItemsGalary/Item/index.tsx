import { ItemInfo } from '@components/MainItems/ItemsGalary/Item/ItemInfo'
import { Image, WrapperItem } from './styles'

export const Item = ({ el }) => {
  return (
    <WrapperItem>
      <Image
        src={
          'https://www.artic.edu/iiif/2/968e49fe-a6a4-bf2a-ce6e-948fa31f13ac/full/843,/0/default.jpg'
        }
      />
      <ItemInfo info={el}></ItemInfo>
    </WrapperItem>
  )
}
