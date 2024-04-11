import { useEffect, useState } from 'react'
import { ArtworkById, fetchArtworkById } from '@/api/api'
import { generateLink } from '@/utils/generateLink.helper'

interface ArtworkByIdWithImage extends ArtworkById {
  image_url: string
}

export const useFetchArtById = (id: number | undefined) => {
  // if (!id) return

  const [artwork, setArtwork] = useState<ArtworkByIdWithImage | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const artworkData = await fetchArtworkById(id)
      const imageUrl: string = generateLink(artworkData.image_id)
      const artworkWithImage: ArtworkByIdWithImage = {
        ...artworkData,
        image_url: imageUrl,
      }
      setIsLoading(true)
      setArtwork(artworkWithImage)
    }

    id && fetchData()
  }, [id])
  return { artwork, isLoading }
}
