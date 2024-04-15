import styled from 'styled-components'
import { colors } from '@/constants/colors'

export const FavoritesIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 59px;
  background-color: ${colors.background};
  border-radius: 50%;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 390px) {
    width: 25px;
    height: 25px;
  }
  @media (min-width: 390px) and (max-width: 769px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    width: 30px;
    height: 30px;
  }
  @media (min-width: 1280px) {
    width: 35px;
    height: 35px;
  }
`
export const WrapperContainer = styled.div`
  display: flex;
  width: 276px;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 390px) {
    width: 83%;
  }
  @media (min-width: 390px) and (max-width: 769px) {
    width: 88%;
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    width: 85%;
  }
  @media (min-width: 1280px) {
    width: 85%;
  }
`
export const ItemTitle = styled.div`
  font-size: 1rem;
  width: 250px;
  color: ${colors.primary};
  font-weight: 500;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 390px) {
    width: 83%;
  }
  @media (min-width: 390px) and (max-width: 769px) {
    width: 88%;
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    width: 85%;
  }
  @media (min-width: 1280px) {
    width: 85%;
  }
`
export const Status = styled.div`
  font-size: 1rem;
  height: 1.62rem;
  color: ${colors.primary};
  font-weight: 700;
  margin-top: 15px;
`
export const ItemAuthor = styled.div`
  font-size: 15px;
  width: 200px;
  height: 1.62rem;
  color: ${colors.gold};
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const WrapperItemInfo = styled.div`
  display: flex;
  height: 132px;
  justify-content: space-around;
  background-color: ${colors.white};
  width: 90%;
  margin-left: 10px;
  padding: 12px 24px;
  position: absolute;
  bottom: -70px;
  left: 10px;
  z-index: 1;
  @media (max-width: 390px) {
    width: 83%;
    padding: 6px 12px;
    height: 90px;
  }
  @media (min-width: 390px) and (max-width: 769px) {
    width: 88%;
    padding: 6px 12px;
    height: 90px;
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    width: 85%;
    padding: 6px 12px;
    height: 110px;
  }
`
