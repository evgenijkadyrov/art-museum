import React from 'react'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { debounce } from 'lodash'
import { ErrorStyled, FieldStyled, SearchFormContainer, StyledButton, StyledForm } from './styles'
import { SearchIcon } from '@/assets/SearchIcon'

interface SearchArtworkProps {
  setFilter: (filter: string) => void
  setCurrentPage: (page: number) => void
}

export const SearchArtworkForm = ({ setFilter, setCurrentPage }: SearchArtworkProps) => {
  const validationSchema = Yup.object({
    search: Yup.string().max(15, 'Maximum 15 symbols'),
  })
  const handleSearch = debounce((value: string) => {
    setFilter(value)
    setCurrentPage(1)
  }, 600)

  return (
    <Formik
      initialValues={{ search: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        setFilter(values.search)
        resetForm()
      }}
    >
      {({ handleSubmit, values, handleChange }) => (
        <StyledForm onSubmit={handleSubmit}>
          <SearchFormContainer>
            <FieldStyled
              type="text"
              name="search"
              placeholder="Search artwork"
              value={values.search}
              onChange={(event) => {
                handleChange(event)
                handleSearch(event.target.value)
              }}
            />
            <ErrorStyled>
              <ErrorMessage name="search" component="div" className="error" />
            </ErrorStyled>
          </SearchFormContainer>
          <StyledButton type="submit">
            <SearchIcon />
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  )
}
