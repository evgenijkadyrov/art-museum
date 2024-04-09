import styled from 'styled-components'

export const WrapperPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`

export const PageLink = styled.div<{ active?: boolean }>`
  margin: 0.5rem;
  padding: 0.25rem 0.5rem;
  color: ${(props) => (props.active ? '#FFFFFF' : '#393939')};
  background-color: ${(props) => (props.active ? 'rgb(241, 121, 0)' : '#F0F1F1')};
  cursor: pointer;
`
