import {
  ArticleAuthor,
  AuthorYearsLive,
  CommonInformation,
  ContainerDescription,
  Content,
  Image,
  ImageWrapper,
  OverviewInformation,
  OverviewItemText,
  StyledContent,
  TitleOfArticle,
  Wrapper,
} from '@/pages/info/styles'
import { useParams } from 'react-router-dom'
import { useFetchArtById } from '@/hooks/useFetchArtById'
import { Layout } from '@/common/Layout/Layout'

export const Info = () => {
  const { id } = useParams<{ id: string | undefined }>()
  const { artwork } = useFetchArtById(id)

  return (
    <Layout>
      <Content>
        <Wrapper>
          <StyledContent>
            <ImageWrapper>
              <Image background_url={artwork?.imageUrl} />
            </ImageWrapper>
            <ContainerDescription>
              <CommonInformation>
                <TitleOfArticle>{artwork?.title}</TitleOfArticle>
                <ArticleAuthor>{artwork?.artist_title}</ArticleAuthor>
                <AuthorYearsLive>
                  {artwork?.date_start}-{artwork?.date_end}
                </AuthorYearsLive>
              </CommonInformation>
              <OverviewInformation>
                Overview
                <OverviewItemText>
                  Artist nationality: <span>{artwork?.place_of_origin}</span>
                </OverviewItemText>
                <OverviewItemText>
                  Dimensions Sheet: <span> {artwork?.dimensions}</span>
                </OverviewItemText>
                <OverviewItemText>
                  Credit Line: <span> {artwork?.credit_line}</span>
                </OverviewItemText>
                <OverviewItemText>
                  Repository: <span>{artwork?.copyright_notice} </span>
                </OverviewItemText>
                <OverviewItemText>
                  <span>Public</span>
                </OverviewItemText>
              </OverviewInformation>
            </ContainerDescription>
          </StyledContent>
        </Wrapper>
      </Content>
    </Layout>
  )
}
