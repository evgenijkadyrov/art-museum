import styled from 'styled-components'

interface ImageProps {
  background_url: string
}

export const Image = styled.div<ImageProps>`
  max-width: 100%;
  height: 100%;
  border-radius: 8px;
  background-image: url(${({ background_url }) => background_url});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  background-repeat: no-repeat;
`
export const WrapperItem = styled.div`
  display: flex;
  max-width: 450px;
  height: 450px;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media (max-width: 390px) {
    height: 180px;
  }
  @media (min-width: 391px) and (max-width: 768px) {
    margin-bottom: 80px;
    height: 250px;
  }
  @media (min-width: 769px) and (max-width: 1280px) {
    margin-bottom: 80px;
    height: 320px;
  }
`
