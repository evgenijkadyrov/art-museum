import { FirstLineText, SecondLineText, WrapperTitleGallery } from '@/common/TitleForGallery/styles'
export interface TitleForGalleryProps {
  firstLineText: string
  secondLineText: string
}

export const TitleGallery = ({ firstLineText, secondLineText }: TitleForGalleryProps) => {
  return (
    <WrapperTitleGallery>
      <FirstLineText>{firstLineText}</FirstLineText>
      <SecondLineText>{secondLineText}</SecondLineText>
    </WrapperTitleGallery>
  )
}
