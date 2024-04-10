import styled from 'styled-components'
import { Form, Field } from 'formik'
export const SearchFormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`
export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  margin-bottom: 80px;
`
export const StyledButton = styled.button`
  position: relative;
  left: -28px;
  top: 1px;
`
export const ErrorStyled = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const SearchResultsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: calc(50% - 562px / 2);
  width: 562px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
  color: black;
`
export const FieldStyled = styled(Field)`
  width: 562px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
export const SearchResultItem = styled.div`
  padding: 8px;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: #f5f5f5;
  }
`
