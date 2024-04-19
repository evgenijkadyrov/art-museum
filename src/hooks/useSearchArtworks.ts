import { fetchArtworkById, searchArtworks } from '@/api/api'
import { useEffect, useState } from 'react'
import { generateLink } from '@/utils/generateLink.helper'
import { ArtworkByIdWithImage } from '@/types/interfaces'

export interface useSearchArtworksProps {
  filteredArtList: ArtworkByIdWithImage[]
  isLoading: boolean
  totalSearchPage: number | undefined
  currentSearchPage: number | undefined
}

export function useSearchArtworks(
  searchValue: string,
  currentPage: number
): useSearchArtworksProps {
  const [filteredArtList, setFilteredArtList] = useState<ArtworkByIdWithImage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalSearchPage, setTotalSearchPage] = useState<number>()
  const [currentSearchPage, setCurrentSearchPage] = useState<number>()
  useEffect(() => {
    const searchArtworksList = async () => {
      setIsLoading(true)
      try {
        const res = await searchArtworks(searchValue, currentPage)
        setTotalSearchPage(res.pagination.total_pages)
        setCurrentSearchPage(res.pagination.current_page)
        const arts: ArtworkByIdWithImage[] = []
        res.data.map(async (el) => {
          const artworkData = await fetchArtworkById(el.id)
          const artworkWithImage: ArtworkByIdWithImage = {
            ...artworkData,
            imageUrl: generateLink(artworkData.image_id),
          }
          arts.push(artworkWithImage)
        })
        setFilteredArtList(arts)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    searchArtworksList()
  }, [searchValue, currentPage])
  return { filteredArtList, isLoading, currentSearchPage, totalSearchPage }
}
