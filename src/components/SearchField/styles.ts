import styled from 'styled-components'
import { Field, Form } from 'formik'

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
  position: absolute;
  top: 35px;
  color: #ff5252;
  justify-content: flex-start;
`

export const FieldStyled = styled(Field)`
  width: 562px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`
