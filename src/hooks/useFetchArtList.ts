import { fetchArtLists } from '@/api/api'
import { useEffect, useState } from 'react'
import { generateLink } from '@/utils/generateLink.helper'
import { ArtworkByIdWithImage } from '@/types/interfaces'

export interface UseFetchArtListProps {
  artList: ArtworkByIdWithImage[]
  isLoading: boolean
  allPage: number
  currentArtworksPage: number
}

export function useFetchArtList(currentPage: number): UseFetchArtListProps {
  const [artList, setArtList] = useState<ArtworkByIdWithImage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [allPage, setAllPage] = useState<number>(1)
  const [currentArtworksPage, setCurrentArtworksPage] = useState(1)
  console.log(artList)
  useEffect(() => {
    const fetchArtList = async () => {
      setIsLoading(true)
      try {
        const res = await fetchArtLists(currentPage)
        setAllPage(res.pagination.total_pages)
        setCurrentArtworksPage(res.pagination.current_page)

        const artworksWithImages = res.data.map(
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
  }, [currentPage])

  return { artList, isLoading, allPage, currentArtworksPage }
}
