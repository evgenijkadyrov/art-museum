import { useEffect, useState } from 'react'
import { ArtworkWithImage } from '@components/ContentHomePage/interfaces'

interface UseFilteredArtListProps {
  filteredArtList: ArtworkWithImage[]
}

export const useFilteredArtList = (
  filter: string,
  artList: ArtworkWithImage[]
): UseFilteredArtListProps => {
  const [filteredArtList, setFilteredArtList] = useState<ArtworkWithImage[]>([])

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
