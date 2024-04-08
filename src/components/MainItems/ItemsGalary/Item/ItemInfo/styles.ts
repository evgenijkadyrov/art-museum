import styled from 'styled-components'

export const Favorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 59px;
  background-color: rgb(249, 249, 249);
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
  color: rgb(57, 57, 57);
  font-weight: 500;
  margin-bottom: 10px;
`
export const Status = styled.div`
  font-size: 15px;
  height: 26px;
  color: rgb(57, 57, 57);
  font-weight: 700;
  margin-top: 15px;
`
export const ItemAuthor = styled.div`
  font-size: 15px;
  height: 26px;
  color: rgb(224, 164, 73);
  font-weight: 500;
`
export const WrapperItemInfo = styled.div`
  display: flex;
  height: 132px;
  justify-content: space-around;
  background-color: rgb(240, 241, 241);
  width: 90%;
  margin-left: 5px;
  padding: 12px 24px;
  position: absolute;
  bottom: -70px;
  left: 10px;
  z-index: 1;
`
