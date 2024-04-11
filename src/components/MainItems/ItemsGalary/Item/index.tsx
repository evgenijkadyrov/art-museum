import { ItemInfo } from '@components/MainItems/ItemsGalary/Item/ItemInfo'
import { Image, WrapperItem } from './styles'
import { useNavigate } from 'react-router-dom'
import { LoadingSpinner } from '@components/Loader'
import { useFetchArtById } from '@/hooks/useFetchArtById'
import { ArtworkWithImage } from '@components/ContentHomePage'
import { SearchArtWork } from '@/api/api'

interface ItemProps {
  el: ArtworkWithImage | SearchArtWork
  isLoading: boolean
}

export const Item = ({ el, isLoading }: ItemProps) => {
  const isSearchEl = '_score' in el
  const artwork = useFetchArtById(isSearchEl ? el.id : undefined)

  const navigate = useNavigate()
  console.log(artwork, el)
  const handleClick = () => {
    // navigate(`/${el.id}`)
  }
  const currentEl = isSearchEl && artwork ? artwork.artwork : (el as ArtworkWithImage)

  return (
    <WrapperItem>
      {isLoading && <LoadingSpinner />}
      <Image background_url={currentEl?.image_url} onClick={handleClick} />
      {/* {artwork && !artwork.isLoading &&*/}
      <ItemInfo
        artist_title={currentEl?.artist_title ?? ''}
        title={currentEl?.title ?? ''}
      ></ItemInfo>
    </WrapperItem>
  )
}
