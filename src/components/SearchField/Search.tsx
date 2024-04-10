import React, { FC, useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import {
  ErrorStyled,
  FieldStyled,
  SearchFormContainer,
  SearchResultItem,
  SearchResultsContainer,
  StyledButton,
  StyledForm,
} from './styles'
import { searchArtwork, SearchArtWorkResponse } from '@/api/api'
import { SearchIcon } from '@/assets/SearchIcon'

export const SearchArtworkForm: FC = () => {
  const [searchResults, setSearchResults] = useState<SearchArtWorkResponse[]>([])

  const navigate = useNavigate()
  const validationSchema = Yup.object({
    search: Yup.string().min(2, 'Minimum 2 symbols').required('Search term is required'),
  })
  const handleSearch = async (value: string) => {
    try {
      const data = await searchArtwork(value)
      setSearchResults(data)
    } catch (error) {
      console.error('Error retrieving artwork:', error)
      setSearchResults([])
    }
  }

  const handleRedirect = (id: number) => {
    navigate(`/${id}`)
  }

  return (
    <Formik
      initialValues={{ search: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        handleSearch(values.search)
      }}
    >
      <StyledForm>
        <SearchFormContainer>
          <FieldStyled type="text" name="search" placeholder="Search artwork" />
          <ErrorStyled>
            <ErrorMessage name="search" component="div" className="error" />
          </ErrorStyled>
          {searchResults.length > 0 && (
            <SearchResultsContainer>
              {searchResults.map((result) => (
                <SearchResultItem key={result.id} onClick={() => handleRedirect(result.id)}>
                  {result.title}
                </SearchResultItem>
              ))}
            </SearchResultsContainer>
          )}
        </SearchFormContainer>
        <StyledButton type="submit">
          <SearchIcon />
        </StyledButton>
      </StyledForm>
    </Formik>
  )
}
