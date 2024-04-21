import {
  ChevronDownStyled,
  SelectContainer,
  SelectWrapper,
  StyledSelect,
} from '@components/SortingItems/SelectComponent/styles'
import { ChangeEvent } from 'react'

import { SortOption } from '@/types/interfaces'

interface SelectComponentProps {
  sortType: SortOption
  setSortType: (sortType: SortOption) => void
}

export const SelectComponent = ({ setSortType, sortType }: SelectComponentProps) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortType(event.target.value as SortOption)
  }

  return (
    <SelectContainer>
      <SelectWrapper>
        <StyledSelect value={sortType} onChange={handleSelectChange}>
          <option value="">Sorting by</option>
          <option value="asc">Title by A-Z</option>
          <option value="desc">Title by Z-A</option>
          <option value="newest">Newest</option>
          <option value="latest">Latest</option>
        </StyledSelect>
        <ChevronDownStyled />
      </SelectWrapper>
    </SelectContainer>
  )
}
