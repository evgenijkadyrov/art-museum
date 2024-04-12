import styled from 'styled-components'
import { colors } from '@/constants/colors'

export const FavoritesIcon = styled.button`
  position: absolute;
  right: 0;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 59px;
  background-color: ${colors.background};
  border-radius: 50%;
  margin-right: 10px;
  border: 0 solid ${colors.background};

  :hover {
    cursor: pointer;
  }
`
export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  margin-top: 5px;
`
export const ItemTitle = styled.div`
  font-size: 1rem;
  color: ${colors.primary};
  font-weight: 500;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 70%;
`
export const Status = styled.div`
  font-size: 1rem;
  height: 1.75rem;
  color: ${colors.primary};
  font-weight: 700;
  margin-top: 10px;
`

export const ItemAuthor = styled.div`
  font-size: 1rem;
  height: 1.75rem;
  color: ${colors.gold};
  font-weight: 500;
`

interface ImageProps {
  background_url: string
}

export const Image = styled.div<ImageProps>`
  width: 80px;
  height: 80px;
  background-image: url(${({ background_url }) => background_url});
  background-position: center;
  background-size: cover;
  object-fit: fill;
  cursor: pointer;
  @media (max-width: 390px) {
    width: 40px;
    height: 40px;
  }
`
export const AdditionalItem = styled.div`
  position: relative;
  display: flex;
  flex: 0 1 30%;
  gap: 10px;
  background-color: ${colors.white};

  @media (max-width: 768px) {
    flex: 0 1 48%;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 430px) {
    flex: 0 1 100%;
    width: 300px;
  }
  @media (min-width: 430px) and (max-width: 475px) {
    flex: 0 1 100%;
    width: 340px;
  }
`

export const WrapperAdditionalItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
