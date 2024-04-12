import { fetchArtLists } from '@/api/api'
import { useEffect, useState } from 'react'
import { generateLink } from '@/utils/generateLink.helper'
import { ArtworkByIdWithImage } from '@/types/interfaces'

export interface UseFetchArtListProps {
  artList: ArtworkByIdWithImage[]
  isLoading: boolean
}

export function useFetchArtList(): UseFetchArtListProps {
  const [artList, setArtList] = useState<ArtworkByIdWithImage[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchArtList = async () => {
      setIsLoading(true)
      try {
        const res = await fetchArtLists()
        const artworksWithImages = res.map(
          (artwork) =>
            ({
              ...artwork,
              imageUrl: generateLink(artwork.image_id),
            }) as ArtworkByIdWithImage
        )
        setArtList(artworksWithImages)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArtList()
  }, [])

  return { artList, isLoading }
}
