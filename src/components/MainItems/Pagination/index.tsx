import { getPaginationItems } from '@/utils/getPagination.helper'
import { PageLink, WrapperPagination } from './styles'
import { memo } from 'react'

interface PaginationProps {
  currentPage: number | undefined
  lastPage: number | undefined
  maxLength: number
  setCurrentPage: (newPage: number) => void
}

export const Pagination = memo(
  ({ currentPage, lastPage, maxLength, setCurrentPage }: PaginationProps) => {
    const pageNums = getPaginationItems(currentPage, lastPage, maxLength)
    return (
      <WrapperPagination aria-label="Pagination">
        {currentPage && (
          <PageLink disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </PageLink>
        )}

        {pageNums.map((pageNum, idx) => (
          <PageLink
            key={idx}
            active={currentPage === pageNum}
            disabled={isNaN(pageNum)}
            onClick={() => setCurrentPage(pageNum)}
          >
            {!isNaN(pageNum) ? pageNum : '...'}
          </PageLink>
        ))}
        {currentPage && lastPage && (
          <PageLink
            disabled={currentPage === lastPage}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </PageLink>
        )}
      </WrapperPagination>
    )
  }
)
