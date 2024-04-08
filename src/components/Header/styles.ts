import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(54, 53, 53);
`
export const Container = styled.div`
  width: 1280px;
  height: 127px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 206px;
  height: 63px;
`
export const MuseumName = styled.div`
  color: ${(props) => props.color};
  display: flex;
  align-self: end;
  padding: 5px;
  span {
    margin-left: 5px;
    font-weight: bold;
    color: #e0a449;
  }
`
export const Navigation = styled.ul`
  display: flex;
  margin-top: 30px;
  align-items: center;
  align-content: end;
  color: white;
`
