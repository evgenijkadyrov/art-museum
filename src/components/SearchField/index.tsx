import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { debounce } from 'lodash'
import { ErrorStyled, FieldStyled, SearchFormContainer, StyledButton, StyledForm } from './styles'
import { SearchIcon } from '@/assets/icons/SearchIcon'
import { ChangeEvent } from 'react'

interface SearchArtworkProps {
  setSearchValue: (value: string) => void
}

export const SearchArtworkForm = ({ setSearchValue }: SearchArtworkProps) => {
  const validationSchema = Yup.object({
    search: Yup.string().max(15, 'Maximum 15 symbols'),
  })
  const handleSearchDebounce = debounce((value: string) => {
    const newTitle = value.trim().toLowerCase()
    setSearchValue(newTitle)
  }, 600)
  return (
    <Formik
      initialValues={{ search: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        setSearchValue(values.search)
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
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                handleChange(event)
                handleSearchDebounce(event.target.value)
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
