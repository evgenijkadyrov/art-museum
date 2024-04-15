import styled from 'styled-components'
import { HTMLAttributes } from 'react'

export const WrapperPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`

export const PageLink = styled.div<
  HTMLAttributes<HTMLDivElement> & { active?: boolean; disabled?: boolean }
>`
  margin: 0.5rem;
  padding: 0.25rem 0.5rem;

  color: ${({ active }) => (active ? '#FFFFFF' : '#393939')};
  background-color: ${({ active }) => (active ? 'rgb(241, 121, 0)' : '#F0F1F1')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'true')};
`
