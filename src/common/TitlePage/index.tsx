import { FirstLine, SecondLine, TextWrapper } from '@/common/TitlePage/styles'

export const TitlePage = ({ firstLine, secondLine, isActive, colored }) => {
  return (
    <TextWrapper>
      <FirstLine className={isActive ? 'active' : ''}>{firstLine}</FirstLine>
      <SecondLine className={colored ? 'active' : ''}> {secondLine}</SecondLine>
    </TextWrapper>
  )
}
