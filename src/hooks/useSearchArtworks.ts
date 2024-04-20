import { fetchArtworkById, searchArtworks } from '@/api/api'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { generateLink } from '@/utils/generateLink.helper'
import { ArtworkByIdWithImage } from '@/types/interfaces'

interface useSearchArtworksProps {
  filteredArtList: ArtworkByIdWithImage[]
  isLoading: boolean
  totalSearchPage: number | undefined
  currentSearchPage: number | undefined
  setFilteredArtList: Dispatch<SetStateAction<ArtworkByIdWithImage[]>>
}

export const useSearchArtworks = (
  searchValue: string,
  currentPage: number
): useSearchArtworksProps => {
  const [filteredArtList, setFilteredArtList] = useState<ArtworkByIdWithImage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalSearchPage, setTotalSearchPage] = useState<number>()
  const [currentSearchPage, setCurrentSearchPage] = useState(1)

  useEffect(() => {
    const searchArtworksList = async () => {
      setIsLoading(true)
      try {
        setCurrentSearchPage(1)
        const { data, pagination } = await searchArtworks(searchValue, currentPage)
        setTotalSearchPage(pagination.total_pages)
        setCurrentSearchPage(pagination.current_page)
        const arts: ArtworkByIdWithImage[] = []
        data.map(async (el) => {
          const artworkData = await fetchArtworkById(el.id)
          const artworkWithImage: ArtworkByIdWithImage = {
            ...artworkData,
            imageUrl: generateLink(artworkData.image_id),
          }
          arts.push(artworkWithImage)
          setIsLoading(false)
        })
        setFilteredArtList(arts)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      }
    }

    searchArtworksList()
  }, [searchValue, currentPage])
  return {
    filteredArtList,
    isLoading,
    currentSearchPage,
    totalSearchPage,
    setFilteredArtList,
  }
}
