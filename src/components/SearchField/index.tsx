import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import {
  ErrorText,
  SearchButton,
  SearchFormWrapper,
  SearchInput,
} from '@components/SearchField/styles'

export const SearchForm = () => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Search query:', values.search)
    setSubmitting(false)
    resetForm()
  }

  const validationSchema = Yup.object({
    search: Yup.string()
      .min(2, 'Minimum 2 characters')
      .max(15, 'Maximum 15 characters')
      .required('Required'),
  })

  return (
    <Formik
      initialValues={{ search: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <SearchFormWrapper>
          <SearchInput type="text" name="search" placeholder="Enter text" />
          <SearchButton type="submit">
            <span role="img" aria-label="Search">
              🔍
            </span>
          </SearchButton>
        </SearchFormWrapper>
        <ErrorText name="search" component="div" />
      </Form>
    </Formik>
  )
}
