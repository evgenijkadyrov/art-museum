import { ItemInfo } from '@components/MainItems/ItemsGalary/Item/ItemInfo'
import { Image, WrapperItem } from './styles'
import { useNavigate } from 'react-router-dom'

export const Item = ({ el }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${el.id}`)
  }
  return (
    <WrapperItem>
      <Image background_url={el.image_url} onClick={handleClick} />
      <ItemInfo info={el}></ItemInfo>
    </WrapperItem>
  )
}
