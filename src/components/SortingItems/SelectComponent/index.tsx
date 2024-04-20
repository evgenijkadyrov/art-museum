import {
  SelectContainer,
  SelectWrapper,
  StyledSelect,
} from '@components/SortingItems/SelectComponent/styles'

const SelectComponent = ({ setSortType, sortType }) => {
  const handleSelectChange = (event) => {
    setSortType(event.target.value)
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
      </SelectWrapper>
    </SelectContainer>
  )
}

export default SelectComponent
