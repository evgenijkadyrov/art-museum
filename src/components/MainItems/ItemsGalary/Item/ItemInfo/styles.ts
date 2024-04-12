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
`
export const WrapperContainer = styled.div`
  display: flex;
  width: 276px;
  flex-direction: column;
  align-items: flex-start;
`
export const ItemTitle = styled.div`
  font-size: 17.5px;
  width: 250px;
  color: ${colors.primary};
  font-weight: 500;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const Status = styled.div`
  font-size: 15px;
  height: 26px;
  color: ${colors.primary};
  font-weight: 700;
  margin-top: 15px;
`
export const ItemAuthor = styled.div`
  font-size: 15px;
  width: 200px;
  height: 26px;
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
  background-color: ${colors.background};
  width: 90%;
  margin-left: 5px;
  padding: 12px 24px;
  position: absolute;
  bottom: -70px;
  left: 10px;
  z-index: 1;
`
