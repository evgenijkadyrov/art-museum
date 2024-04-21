import { useEffect, useState } from 'react'
import { fetchRecommendedArtworks } from '@/api/api'
import { ArtworkByIdWithImage } from '@/types/interfaces'
import { generateLink } from '@/utils/generateLink.helper'

export interface useFetchRecommendedArtDataProps {
  isLoading: boolean
  artworksRecommended: ArtworkByIdWithImage[]
}

export const useFetchRecommendedArtData = (): useFetchRecommendedArtDataProps => {
  const [artworksRecommended, setArtworksRecommended] = useState<ArtworkByIdWithImage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true)
      try {
        const artworksData = await fetchRecommendedArtworks()
        const artworksWithImages = artworksData.map((artwork) => {
          return {
            ...artwork,
            imageUrl: generateLink(artwork.image_id),
          } as ArtworkByIdWithImage
        })
        setArtworksRecommended(artworksWithImages)
        setIsLoading(false)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      }
    }

    fetchData()
  }, [])
  return { artworksRecommended, isLoading }
}
