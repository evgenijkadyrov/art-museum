import { LoadingSpinner } from '@components/Loader'
import { useParams } from 'react-router-dom'

import { Layout } from '@/common/Layout/Layout'
import { useFetchArtById } from '@/hooks/useFetchArtById'
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

export const Info = () => {
  const { id } = useParams<{ id: string | undefined }>()
  const { artwork, isLoading } = useFetchArtById(id)

  return (
    <Layout>
      <Content>
        <Wrapper>
          <StyledContent>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <ImageWrapper>
                <Image background_url={artwork?.imageUrl} />
              </ImageWrapper>
            )}
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
