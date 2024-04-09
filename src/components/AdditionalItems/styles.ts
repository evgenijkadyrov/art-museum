import styled from 'styled-components'

export const Favorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 59px;
  background-color: rgb(249, 249, 249);
  border-radius: 50%;
  margin-right: 10px;

  :hover {
    cursor: pointer;
  }
`
export const WrapperContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
`
export const ItemTitle = styled.div`
  font-size: 17.5px;
  color: rgb(57, 57, 57);
  font-weight: 500;
  margin-bottom: 5px;
`
export const Status = styled.div`
  font-size: 15px;
  height: 26px;
  color: rgb(57, 57, 57);
  font-weight: 700;
  margin-top: 10px;
`

export const ItemAuthor = styled.div`
  font-size: 15px;
  height: 26px;
  color: rgb(224, 164, 73);
  font-weight: 500;
`
interface ImageProps {
  background_url: string
}
export const Image = styled.div<ImageProps>`
  width: 80px;
  height: 80px;
  background-image: url(${(props) => props.background_url});
  background-position: center;
  background-size: cover;
`

export const AdditionalItem = styled.div`
  display: grid;

  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  gap: 10px;
  background-color: rgb(240, 241, 241);
`
export const WrapperAdditionalItems = styled.div`
  display: grid;
  margin-bottom: 60px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`
