import { HomeStyled } from '@/pages/home/styles'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { AdditionalItems } from '@components/AdditionalItems'
import { TitleGallery } from '@/common/TitleForGallery'
import { TitlePage } from '@/common/TitlePage'
import styled from 'styled-components'

const favorites = [
  {
    id: 13793,
    title: 'Four Children',
    artist_title: 'Constantin Brancusi',
    image_id: '3385d31f-8a06-2d37-e312-1e8f90ef0426',
  },
  {
    id: 19204,
    title: 'The Day After',
    artist_title: 'Edvard Munch',
    image_id: 'd3297558-337f-bc4b-4489-52493a63a5a7',
  },
  {
    id: 17236,
    title: 'Tingletangle',
    artist_title: 'Edvard Munch',
    image_id: 'ae62fa01-9823-797f-1780-2b965ee7d4f4',
  },
  {
    id: 21977,
    title: 'Melon-Shaped Ewer with Stylized Flowers',
    artist_title: null,
    image_id: '968e49fe-a6a4-bf2a-ce6e-948fa31f13ac',
  },
  {
    id: 19822,
    title: 'Cameo, No. 2',
    artist_title: 'James McNeill Whistler',
    image_id: '8d40093d-7427-ddbb-41af-e4e642b5ce30',
  },
  {
    id: 25312,
    title: "Vessel Depicting K'awiil (God K) and Itzamna Exchanging Gifts",
    artist_title: 'Maya',
    image_id: '3e5e1700-1cef-8ac8-06a9-6dc5cc723e3a',
  },
  {
    id: 23700,
    title: 'The Praying Jew',
    artist_title: 'Marc Chagall',
    image_id: '0b5057af-97c6-5eb8-7328-fa9cf46d8751',
  },
  {
    id: 27987,
    title: 'Jacques and Berthe Lipchitz',
    artist_title: 'Amedeo Modigliani',
    image_id: '7e649536-b186-c3f5-3e6d-0d22d5d798ef',
  },
  {
    id: 32349,
    title: 'City',
    artist_title: 'Ed Ruscha',
    image_id: 'a8fe598b-a83b-1cd4-e4fb-ffc63599f249',
  },
]
export const Favorites = () => {
  return (
    <HomeStyled>
      <Header />
      <Layout>
        <Content>
          <TitlePage firstLine={'Here re Yours'} secondLine={'Favorites'} colored />
          <TitleGallery
            firstLineText={'Saved bu you'}
            secondLineText={'Your favorites list'}
            color={'red'}
          />
          <AdditionalItems data={favorites} />
        </Content>
      </Layout>

      <Footer />
    </HomeStyled>
  )
}

export const Layout = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex: 1;
`
export const Content = styled.main`
  width: 1280px;
  margin: 0 auto;
`
