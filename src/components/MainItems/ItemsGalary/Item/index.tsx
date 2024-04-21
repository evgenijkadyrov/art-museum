import { LoadingSpinner } from '@components/Loader'
import { ItemInfo } from '@components/MainItems/ItemsGalary/Item/ItemInfo'
import { useNavigate } from 'react-router-dom'

import { ArtworkByIdWithImage } from '@/types/interfaces'

import { Image, WrapperItem } from './styles'

interface ItemProps {
  el: ArtworkByIdWithImage
  isLoading: boolean
  favorites: ArtworkByIdWithImage[]
  handleClickFavorite: (el: ArtworkByIdWithImage) => void
}

export const Item = ({ el, isLoading, favorites, handleClickFavorite }: ItemProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${el.id}`)
  }
  return (
    <WrapperItem>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Image background_url={el.imageUrl} onClick={handleClick} alt={el?.title} />
          <ItemInfo data={el} favorites={favorites} handleClickFavorite={handleClickFavorite} />
        </>
      )}
    </WrapperItem>
  )
}
