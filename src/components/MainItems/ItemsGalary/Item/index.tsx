import { ItemInfo } from '@components/MainItems/ItemsGalary/Item/ItemInfo'
import { Image, WrapperItem } from './styles'
import { useNavigate } from 'react-router-dom'
import { LoadingSpinner } from '@components/Loader'
import { ArtworkWithImage } from '@components/ContentHomePage'

interface ItemProps {
  el: ArtworkWithImage
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
        <Image background_url={el.image_url} onClick={handleClick} />
      )}
      <ItemInfo artist_title={el.artist_title ?? ''} title={el.title ?? ''} />
    </WrapperItem>
  )
}
