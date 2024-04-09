import { Artwork, fetchArtworks } from '@/api/api'
import { ArtworkWithImage } from '@components/ContentHomePage'
import { useEffect, useState } from 'react'

export function useFetchArtData(currentPage: number) {
  const [artworks, setArtworks] = useState<ArtworkWithImage[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true)
        const artworksData: Artwork[] = await fetchArtworks(currentPage)
        const artworksWithImages: ArtworkWithImage[] = artworksData.map((artwork) => {
          const imageUrl: string = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`
          return { ...artwork, image_url: imageUrl }
        })
        setArtworks(artworksWithImages)
        setIsLoading(false)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      }
    }

    fetchData()
  }, [currentPage])
  return { artworks, isLoading }
}
