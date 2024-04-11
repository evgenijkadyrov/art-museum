import styled from 'styled-components'

export const TitleOfArticle = styled.div`
  font-size: 32px;
  margin-bottom: 32px;
  color: #393939;
  opacity: 0.3;
`
export const ArticleAuthor = styled.div`
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 16px;
  color: rgb(224, 164, 73);
`
export const AuthorYearsLive = styled.div`
  font-size: 16px;
  line-height: 30px;
  font-weight: bold;
`
export const OverviewItemText = styled.div`
  font-size: 16px;
  color: rgb(224, 164, 73);

  span {
    color: #393939;
  }
`
export const OverviewInformation = styled.div`
  font-size: 32px;
  line-height: 40px;
  color: #393939;
`
export const CommonInformation = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Image = styled.div<{ background_url: string | undefined }>`
  width: 500px;
  max-height: 570px;
  margin-right: 80px;
  background-image: url(${(props) => props.background_url});
  background-position: center;
  background-size: contain;
`
export const WrapperContent = styled.div`
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  flex: 1;
  justify-content: center;
  width: 1280px;
  margin: 0 auto;
`
export const Layout = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex: 1;
`

export const Content = styled.main`
  background-color: #f5f5f5;
`
