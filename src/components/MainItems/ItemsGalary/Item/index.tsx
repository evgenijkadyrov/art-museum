import { ItemInfo } from '@components/MainItems/ItemsGalary/Item/ItemInfo'
import { Image, WrapperItem } from './styles'
import { useNavigate } from 'react-router-dom'
import { LoadingSpinner } from '@components/Loader'
import { ArtworkByIdWithImage } from '@/types/interfaces'

interface ItemProps {
  el: ArtworkByIdWithImage
  isLoading: boolean
}

export const Item = ({ el, isLoading }: ItemProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${el.id}`)
  }

  return (
    <WrapperItem>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Image background_url={el.imageUrl} onClick={handleClick} />
      )}
      <ItemInfo data={el} />
    </WrapperItem>
  )
}
