import { AdditionalItems } from '@components/AdditionalItems'
import { TitleGallery } from '@/common/TitleForGallery'
import { TitlePage } from '@/common/TitlePage'
import { useToggleFavoriteArt } from '@/hooks/useToggleFavoriteArt'
import { Layout } from '@/common/Layout/Layout'
import { Content, Wrapper } from './styles'

export const FavoritesPage = () => {
  const { favorites } = useToggleFavoriteArt()

  return (
    <Layout>
      <Wrapper>
        <Content>
          <TitlePage firstLine={'Here re Yours'} secondLine={'Favorites'} isColored={true} />
          <TitleGallery
            firstLineText={'Saved by you'}
            secondLineText={'Your favorites list'}
            // color={'red'}
          />
          <AdditionalItems isLoading={false} data={favorites} isFavoritesPage />
        </Content>
      </Wrapper>
    </Layout>
  )
}
