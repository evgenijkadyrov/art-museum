import { useEffect, useState } from 'react'

import { fetchArtworkById } from '@/api/api'
import { ArtworkByIdWithImage } from '@/types/interfaces'
import { generateLink } from '@/utils/generateLink.helper'

export const useFetchArtById = (id: string | undefined) => {
  const [artwork, setArtwork] = useState<ArtworkByIdWithImage | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async (id: number) => {
      setIsLoading(true)
      try {
        const artworkData = await fetchArtworkById(id)
        const artworkWithImage: ArtworkByIdWithImage = {
          ...artworkData,
          imageUrl: generateLink(artworkData.image_id),
        }
        setArtwork(artworkWithImage)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    id && fetchData(+id)
  }, [id])
  return { artwork, isLoading }
}
