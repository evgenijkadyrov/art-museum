import { useEffect, useState } from 'react'
import { fetchPaginationInfo } from '@/api/api'

export interface Pagination {
  total: number
  limit: number
  offset: number
  total_pages: number
  current_page: number
}

interface FetchPaginationInfoResult {
  totalPage: number
}

export const useFetchPaginationInfo = (): FetchPaginationInfoResult => {
  const [totalPage, setTotalPage] = useState<number>(1)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const res: Pagination = await fetchPaginationInfo()
        setTotalPage(res.total_pages)
      } catch (error) {
        console.error('Error retrieving artworks:', error)
      }
    }

    fetchData()
  }, [])

  return { totalPage }
}
