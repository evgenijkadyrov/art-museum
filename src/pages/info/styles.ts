import styled from 'styled-components'
import { colors } from '@/constants/colors'

export const TitleOfArticle = styled.div`
  font-size: 32px;
  margin-bottom: 32px;
  color: ${colors.primary};
  opacity: 0.3;
`
export const ArticleAuthor = styled.div`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 16px;
  color: ${colors.gold};
`
export const AuthorYearsLive = styled.div`
  font-size: 16px;
  line-height: 30px;
  font-weight: bold;
`
export const OverviewItemText = styled.div`
  font-size: 16px;
  color: ${colors.gold};

  span {
    color: ${colors.primary};
  }
`
export const OverviewInformation = styled.div`
  font-size: 32px;
  line-height: 40px;
  color: ${colors.primary};
`
export const CommonInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;
`
export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const Image = styled.div<{ background_url: string | undefined }>`
  width: 500px;
  max-height: 570px;
  margin-right: 80px;
  background-image: url(${({ background_url }) => background_url});
  background-position: center;
  background-size: contain;
`
export const WrapperContent = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  flex: 1;
  width: 1280px;
  margin: 0 auto;
`

export const Content = styled.main`
  background-color: ${colors.background};
  width: 100%;
  height: 100%;
  display: flex;
`
