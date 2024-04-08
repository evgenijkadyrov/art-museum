import { FirstLine, SecondLine, TextWrapper } from '@components/Title/styles'

export const Title = () => {
  return (
    <TextWrapper>
      <FirstLine>
        Let's Find Some <span>Art</span>
      </FirstLine>
      <SecondLine>Here!</SecondLine>
    </TextWrapper>
  )
}
