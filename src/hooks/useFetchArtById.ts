import { useEffect, useState } from 'react'
import { generateLink } from '@/utils/generateLink.helper'
import { fetchArtworkById } from '@/api/api'
import { ArtworkByIdWithImage } from '@/types/interfaces'

export const useFetchArtById = (id: string | undefined) => {
  const [artwork, setArtwork] = useState<ArtworkByIdWithImage | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async (id: number) => {
      setIsLoading(true)

      const artworkData = await fetchArtworkById(id)
      const artworkWithImage: ArtworkByIdWithImage = {
        ...artworkData,
        imageUrl: generateLink(artworkData.image_id),
      }
      setIsLoading(true)
      setArtwork(artworkWithImage)
    }

    id && fetchData(+id)
  }, [id])
  return { artwork, isLoading }
}
