import React from 'react'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { ErrorStyled, FieldStyled, SearchFormContainer, StyledButton, StyledForm } from './styles'
import { searchArtwork, SearchArtWork } from '@/api/api'
import { SearchIcon } from '@/assets/SearchIcon'

interface SearchArtworkProps {
  searchResultsState: [
    { data: SearchArtWork[]; totalSearchPage: number | null },
    React.Dispatch<React.SetStateAction<{ data: SearchArtWork[]; totalSearchPage: number | null }>>,
  ]
  page: number
  handlePageChange: (page: number) => void
}

export const SearchArtworkForm = ({
  searchResultsState: [searchResults, setSearchResults],
  page,
  handlePageChange,
}: SearchArtworkProps) => {
  const validationSchema = Yup.object({
    search: Yup.string().min(2, 'Minimum 2 symbols').required('Search term is required'),
  })

  const handleSearch = async (value: string): Promise<void> => {
    handlePageChange(page)
    try {
      const res = await searchArtwork(value, page)
      if (res) {
        setSearchResults({ data: res.data, totalSearchPage: res.pagination.total_pages })
      }
    } catch (error) {
      console.error('Error retrieving artwork:', error)
      setSearchResults({ data: [], totalSearchPage: page })
    }
  }

  return (
    <Formik
      initialValues={{ search: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await handleSearch(values.search)
      }}
    >
      <StyledForm>
        <SearchFormContainer>
          <FieldStyled type="text" name="search" placeholder="Search artwork" />
          <ErrorStyled>
            <ErrorMessage name="search" component="div" className="error" />
          </ErrorStyled>
        </SearchFormContainer>
        <StyledButton type="submit">
          <SearchIcon />
        </StyledButton>
      </StyledForm>
    </Formik>
  )
}
