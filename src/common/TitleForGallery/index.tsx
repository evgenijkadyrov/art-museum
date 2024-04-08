import { WrapperTitleGallery, FirstLineText, SecondLineText } from '@/common/TitleForGallery/styles'

export const TitleGallery = ({ firstLineText, secondLineText }) => {
  return (
    <WrapperTitleGallery>
      <FirstLineText>{firstLineText}</FirstLineText>
      <SecondLineText>{secondLineText}</SecondLineText>
    </WrapperTitleGallery>
  )
}
