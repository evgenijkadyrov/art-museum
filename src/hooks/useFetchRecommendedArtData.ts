import { useEffect, useState } from 'react'
import { ArtworkWithImage } from '@components/ContentHomePage'
import { Artwork, fetchRecommendedArtworks } from '@/api/api'

export function useFetchRecommendedArtData() {
  const [artworksRecommended, setArtworksRecommended] = useState<ArtworkWithImage[]>([])
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const artworksData: Artwork[] = await fetchRecommendedArtworks()
        const artworksWithImages: ArtworkWithImage[] = artworksData.map((artwork) => {
          const imageUrl: string = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/800,/0/default.jpg`
          return { ...artwork, image_url: imageUrl }
        })
        setArtworksRecommended(artworksWithImages)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      }
    }

    fetchData()
  }, [])
  return { artworksRecommended }
}
