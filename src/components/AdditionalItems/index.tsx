import styled from 'styled-components'
import { BookMark } from '@/assets/BookMark'

const data = [
  {
    id: 13793,
    title: 'Three Children',
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
export const AdditionalItems = () => {
  return (
    <WrapperAdditionalItems>
      {data.map((el) => {
        return (
          <AdditionalItem key={el.id}>
            <Image
              src={
                'https://www.artic.edu/iiif/2/968e49fe-a6a4-bf2a-ce6e-948fa31f13ac/full/843,/0/default.jpg'
              }
            />
            <WrapperContainer>
              <ItemTitle>{el.title}</ItemTitle>
              <ItemAuthor>{el.artist_title}</ItemAuthor>
              <Status>Public</Status>
            </WrapperContainer>
            <Favorites>
              <BookMark />
            </Favorites>
          </AdditionalItem>
        )
      })}
    </WrapperAdditionalItems>
  )
}
export const Favorites = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 59px;
  height: 59px;
  background-color: rgb(249, 249, 249);
  border-radius: 50%;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`
export const WrapperContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;
`
export const ItemTitle = styled.div`
  font-size: 17.5px;
  color: rgb(57, 57, 57);
  font-weight: 500;
  margin-bottom: 5px;
`
export const Status = styled.div`
  font-size: 15px;
  height: 26px;
  color: rgb(57, 57, 57);
  font-weight: 700;
  margin-top: 10px;
`
export const ItemAuthor = styled.div`
  font-size: 15px;
  height: 26px;
  color: rgb(224, 164, 73);
  font-weight: 500;
`
export const Image = styled.img`
  width: 80px;
  height: 80px;
`
export const AdditionalItem = styled.div`
  display: grid;

  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  gap: 10px;
  background-color: rgb(240, 241, 241);
`
export const WrapperAdditionalItems = styled.div`
  display: grid;
  margin-bottom: 60px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`
