export const totalPageNumber = (length: number, ART_FOR_PAGE: number) => {
  return Math.floor(length / ART_FOR_PAGE)
}
