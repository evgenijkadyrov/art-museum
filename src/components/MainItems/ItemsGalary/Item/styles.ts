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
  object-fit: fill;
  cursor: pointer;
`
export const WrapperItem = styled.div`
  display: flex;
  max-width: 400px;
  height: 450px;
  flex-direction: column;
  justify-content: center;
  position: relative;
`
