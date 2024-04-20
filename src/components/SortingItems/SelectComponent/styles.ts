import styled from 'styled-components'
import { colors } from '@/constants/colors'

export const StyledSelect = styled.select`
  appearance: none;
  outline: 0.8rem ${colors.secondary};
  border: solid 1px grey;
  border-radius: 0.25rem;
  box-shadow: none;
  flex: 1;
  padding: 0 0.5em;
  color: ${colors.primary};
  opacity: 0.7;
  background-color: ${colors.white};
  background-image: none;
  cursor: pointer;

  &::-ms-expand {
    display: none;
  }

  &:hover::after {
    color: #f39c12;
  }
`

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 10em;
  height: 2em;
  border-radius: 0.25em;
  overflow: hidden;
`
export const SelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`
