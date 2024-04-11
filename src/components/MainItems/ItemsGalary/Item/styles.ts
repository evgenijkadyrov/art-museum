import styled from 'styled-components'

interface ImageProps {
  background_url: string
}

export const Image = styled.div<ImageProps>`
  max-width: 400px;
  height: 450px;
  border-radius: 8px;
  background-image: url(${({ background_url }) => background_url});
  background-position: center;
  background-size: cover;
  cursor: pointer;
`
export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`
