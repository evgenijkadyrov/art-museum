import styled from 'styled-components'
import { HTMLAttributes } from 'react'
import { colors } from '@/constants/colors'

export const WrapperPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`

export const PageLink = styled.div<HTMLAttributes<HTMLDivElement> & { active?: boolean }>`
  margin: 0.5rem;
  padding: 0.25rem 0.5rem;
  color: ${({ active }) => (active ? `${colors.white}` : `${colors.primary}`)};
  background-color: ${({ active }) => (active ? `${colors.secondary}` : `${colors.background}`)};
  cursor: pointer;
`
