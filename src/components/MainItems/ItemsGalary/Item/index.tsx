import { ItemInfo } from '@components/MainItems/ItemsGalary/Item/ItemInfo'
import { Image, WrapperItem } from './styles'
import { useNavigate } from 'react-router-dom'
import { LoadingSpinner } from '@components/Loader'

export const Item = ({ el, isLoading }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${el.id}`)
  }
  if (isLoading) {
    return <LoadingSpinner />
  }
  return (
    <WrapperItem>
      <Image background_url={el.image_url} onClick={handleClick} />
      <ItemInfo info={el}></ItemInfo>
    </WrapperItem>
  )
}
