import { FC } from 'react'
import { BookMark } from '@/assets/BookMark'
import { ArtworkWithImage } from '@components/ContentHomePage'
import { useNavigate } from 'react-router-dom'
import {
  AdditionalItem,
  Favorites,
  Image,
  ItemAuthor,
  ItemTitle,
  Status,
  WrapperAdditionalItems,
  WrapperContainer,
} from '@components/AdditionalItems/styles'
import { LoadingSpinner } from '@components/Loader'

interface AdditionalItemsProps {
  data: ArtworkWithImage[]
  isLoading: boolean
}

export const AdditionalItems: FC<AdditionalItemsProps> = ({ data, isLoading }) => {
  const navigate = useNavigate()
  const handleClickImage = (id: number) => {
    navigate(`/${id}`)
  }

  return (
    <WrapperAdditionalItems>
      {data.map((el) => (
        <AdditionalItem key={el.id}>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <Image background_url={el.image_url} onClick={() => handleClickImage(el.id)} />
          )}
          <WrapperContainer>
            <ItemTitle>{el.title}</ItemTitle>
            <ItemAuthor>{el.artist_title}</ItemAuthor>
            <Status>Public</Status>
          </WrapperContainer>
          <Favorites>
            <BookMark />
          </Favorites>
        </AdditionalItem>
      ))}
    </WrapperAdditionalItems>
  )
}
