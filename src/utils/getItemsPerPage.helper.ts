import { ArtworkByIdWithImage } from '@/types/interfaces'

export const getItemsPerPageHelper = (
  items: ArtworkByIdWithImage[],
  itemsPerPage: number,
  currentPage: number
): ArtworkByIdWithImage[] => {
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  return items.slice(indexOfFirstItem, indexOfLastItem)
}
