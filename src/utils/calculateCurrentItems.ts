import { ArtworkWithImage } from '@components/ContentHomePage'

export const calculateCurrentItems = (
  items: ArtworkWithImage[],
  itemsPerPage: number,
  currentPage: number
): ArtworkWithImage[] => {
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  return items.slice(indexOfFirstItem, indexOfLastItem)
}
