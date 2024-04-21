import { fetchArtworkById, searchArtworks } from '@/api/api'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { generateLink } from '@/utils/generateLink.helper'
import { ArtworkByIdWithImage } from '@/types/interfaces'

interface useSearchArtworksProps {
  filteredArtList: ArtworkByIdWithImage[]
  isLoading: boolean
  totalSearchPage: number | undefined
  // currentSearchPage: number | undefined
  setFilteredArtList: Dispatch<SetStateAction<ArtworkByIdWithImage[]>>
}

export const useSearchArtworks = (
  searchValue: string,
  currentPage: number
): useSearchArtworksProps => {
  const [filteredArtList, setFilteredArtList] = useState<ArtworkByIdWithImage[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [totalSearchPage, setTotalSearchPage] = useState<number>()
  useEffect(() => {
    const searchArtworksList = async () => {
      setIsLoading(true)
      try {
        const { data, pagination } = await searchArtworks(searchValue, currentPage)
        setTotalSearchPage(pagination.total_pages)
        const res = (await Promise.all(
          data.map(async (el) => {
            const artworkData = await fetchArtworkById(el.id)
            return {
              ...el,
              ...artworkData,
              imageUrl: generateLink(artworkData.image_id),
            }
          })
        )) as ArtworkByIdWithImage[]
        setFilteredArtList(res)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      } finally {
        setIsLoading(false)
      }
    }

    searchValue && searchArtworksList()
  }, [searchValue, currentPage])
  return {
    filteredArtList,
    isLoading,
    // currentSearchPage,
    totalSearchPage,
    setFilteredArtList,
  }
}
