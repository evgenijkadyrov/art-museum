import { useEffect, useState } from 'react'

import { ArtworkByIdWithImage } from '@/types/interfaces'

export interface UseFilteredArtListProps {
  filteredArtList: ArtworkByIdWithImage[]
}

export const useFilteredArtList = (
  filter: string,
  artList: ArtworkByIdWithImage[]
): UseFilteredArtListProps => {
  const [filteredArtList, setFilteredArtList] = useState<ArtworkByIdWithImage[]>([])

  useEffect(() => {
    const filterArtList = () => {
      if (artList.length > 0) {
        const filtered = artList.filter((art) => {
          const newTitle = art.title.trim().toLowerCase()
          return newTitle.includes(filter)
        })

        setFilteredArtList(filtered)
      }
    }

    filterArtList()
  }, [filter, artList])

  return { filteredArtList }
}
