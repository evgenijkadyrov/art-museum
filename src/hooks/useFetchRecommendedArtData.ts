import { useEffect, useState } from 'react'

import { fetchRecommendedArtworks } from '@/api/api'

interface ArtworkRecommendationProps {
  id: number
  title: string
  artist_title: string
  image_id: string
}

export interface ArtworkRecWithImageProps extends ArtworkRecommendationProps {
  image_url: string
}
interface useFetchRecommendedArtDataProps {
  isLoading: boolean
  artworksRecommended: ArtworkRecWithImageProps[]
}
export const useFetchRecommendedArtData = (): useFetchRecommendedArtDataProps => {
  const [artworksRecommended, setArtworksRecommended] = useState<ArtworkRecWithImageProps[]>([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setIsLoading(true)
      try {
        const artworksData: ArtworkRecommendationProps[] = await fetchRecommendedArtworks()
        const artworksWithImages: ArtworkRecWithImageProps[] = artworksData.map((artwork) => {
          const imageUrl: string = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/800,/0/default.jpg`
          return { ...artwork, image_url: imageUrl }
        })
        setArtworksRecommended(artworksWithImages)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])
  return { artworksRecommended, isLoading }
}
