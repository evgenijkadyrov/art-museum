import { fetchArtLists } from '@/api/api'
import { useEffect, useState } from 'react'
import { generateLink } from '@/utils/generateLink.helper'
import { ArtworkWithImage } from '@components/ContentHomePage'

interface UseFetchArtListProps {
  artList: ArtworkWithImage[]
  isLoading: boolean
}

export function useFetchArtList(): UseFetchArtListProps {
  const [artList, setArtList] = useState<ArtworkWithImage[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchArtList = async (): Promise<void> => {
      setIsLoading(true)
      try {
        const res = await fetchArtLists()
        const artworksWithImages: ArtworkWithImage[] = res.map((artwork) => ({
          ...artwork,
          image_url: generateLink(artwork.image_id),
        }))
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
