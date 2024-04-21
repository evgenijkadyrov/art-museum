import { SelectComponent } from '@components/SortingItems/SelectComponent'
import { Dispatch, memo, SetStateAction, useState } from 'react'

import { ArtworkByIdWithImage, SortOption } from '@/types/interfaces'
import { sortData } from '@/utils/sorting.helper'

interface SortComponentProps {
  data: ArtworkByIdWithImage[]
  setData: Dispatch<SetStateAction<ArtworkByIdWithImage[]>>
}

export const SortComponent = memo(({ data, setData }: SortComponentProps) => {
  const [sortType, setSortType] = useState<SortOption>('')
  const handleSort = (type: SortOption) => {
    const sortedData = sortData(data, type)
    setData(sortedData)
    setSortType(type)
  }
  return <SelectComponent setSortType={handleSort} sortType={sortType} />
})
