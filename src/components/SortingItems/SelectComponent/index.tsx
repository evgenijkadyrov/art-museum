import {
  ChevronDownStyled,
  SelectContainer,
  SelectWrapper,
  StyledSelect,
} from '@components/SortingItems/SelectComponent/styles'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { SortOption } from '@/types/interfaces'

interface SelectComponentProps {
  sortType: SortOption
  setSortType: Dispatch<SetStateAction<SortOption>>
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
          <option value="inc">Title by A-Z</option>
          <option value="asc">Title by Z-A</option>
          <option value="newest">Newest</option>
          <option value="latest">Latest</option>
        </StyledSelect>
        <ChevronDownStyled />
      </SelectWrapper>
    </SelectContainer>
  )
}
