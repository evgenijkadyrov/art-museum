import { describe, expect, it } from 'vitest'

import { renderHook } from '@testing-library/react-hooks'
import { useFetchArtList } from '@/hooks/useFetchArtList'
describe('useSearch', () => {
  it('should return a default search term and original items', async () => {
    const { result, waitFor } = renderHook(() => useFetchArtList(1))

    await waitFor(() => {
      expect(result.current.artList).toEqual([])
      expect(result.current.isLoading).toBe(true)
    })
  })
})
