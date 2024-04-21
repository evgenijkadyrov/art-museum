import { useCallback, useState } from 'react'

interface UseHandlePageChangeProps {
  currentPage: number
  setCurrentPage: (pageNumber: number) => void
  handlePageChange: (pageNumber: number) => void
}

export const useHandlePagination = (): UseHandlePageChangeProps => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber)
  }, [])

  return { currentPage, setCurrentPage, handlePageChange }
}
