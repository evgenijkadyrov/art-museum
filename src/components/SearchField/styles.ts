import styled from 'styled-components'
import { ErrorMessage, Field } from 'formik'

export const SearchFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
`

export const SearchInput = styled(Field)`
  width: 562px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 16px;
  }
`

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
`

export const ErrorText = styled(ErrorMessage)`
  color: red;
`
