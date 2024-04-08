import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import {
  ArticleAuthor,
  AuthorYearsLive,
  CommonInformation,
  ContainerDescription,
  Content,
  Image,
  Layout,
  OverviewInformation,
  OverviewItemText,
  TitleOfArticle,
  WrapperContent,
  WrapperHeader,
} from '@/pages/info/styles'

export const Info = () => {
  return (
    <WrapperHeader>
      <Header />
      <Layout>
        <Content>
          <WrapperContent>
            <Image
              src={
                'https://www.artic.edu/iiif/2/968e49fe-a6a4-bf2a-ce6e-948fa31f13ac/full/843,/0/default.jpg'
              }
              alt={'df'}
            />
            <ContainerDescription>
              <CommonInformation>
                <TitleOfArticle>
                  Charlies V, bust length holding a sword facing right
                </TitleOfArticle>
                <ArticleAuthor>Giviano Britto</ArticleAuthor>
                <AuthorYearsLive>1535-45</AuthorYearsLive>
              </CommonInformation>
              <OverviewInformation>
                Overview
                <OverviewItemText>
                  Artist nationality: <span>German</span>
                </OverviewItemText>
                <OverviewItemText>
                  Dimensions Sheet: <span> 19 3/8 *13 11/16</span>
                </OverviewItemText>
                <OverviewItemText>
                  Credit Line: <span> Rogers Fund</span>
                </OverviewItemText>
                <OverviewItemText>
                  Repository: <span>Metropolian </span>
                </OverviewItemText>
                <OverviewItemText>
                  <span>Public</span>
                </OverviewItemText>
              </OverviewInformation>
            </ContainerDescription>
          </WrapperContent>
        </Content>
      </Layout>
      <Footer />
    </WrapperHeader>
  )
}
