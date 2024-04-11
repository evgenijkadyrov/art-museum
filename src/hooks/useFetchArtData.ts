import { fetchArtworks } from '@/api/api'
import { ArtworkWithImage } from '@components/ContentHomePage'
import { useEffect, useState } from 'react'
import { generateLink } from '@/utils/generateLink.helper'

export function useFetchArtData(currentPage: number, isSearch: boolean) {
  const [artworks, setArtworks] = useState<ArtworkWithImage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalPage, setTotalPage] = useState(0)
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true)
        const { data: artworksData, pagination } = await fetchArtworks(currentPage)
        setTotalPage(pagination.total_pages)
        const artworksWithImages: ArtworkWithImage[] = artworksData.map((artwork) => {
          const imageUrl: string = generateLink(artwork.image_id)
          return { ...artwork, image_url: imageUrl }
        })
        setArtworks(artworksWithImages)
        setIsLoading(false)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      }
    }

    currentPage && !isSearch && fetchData()
  }, [currentPage, isSearch])
  return { artworks, isLoading, totalPage }
}
