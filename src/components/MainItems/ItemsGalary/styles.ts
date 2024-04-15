import styled from 'styled-components'

export const WrapperItemsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 120px;

  @media (min-width: 769px) and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 80px;
  }
  @media (max-width: 769px) {
    grid-template-columns: repeat(1, 1fr);
    margin-bottom: 80px;
    gap: 10px;
  }
`
