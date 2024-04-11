import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { getRandomPageNumber } from '@/utils/createPageRandom'
import { ARTLIST_LIMIT, ART_RECOMMENDED_LIMIT_FOR_PAGE } from '@/constants/constants'
import { ArtList } from '@components/ContentHomePage'
import { Artwork, ArtworkById } from '@/api/interfaces'

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/',
})

export async function fetchArtLists(): Promise<ArtList[]> {
  try {
    const response: AxiosResponse = await instance.get('artworks', {
      params: {
        page: 1,
        limit: ARTLIST_LIMIT,
        fields: 'id,artist_title,title,image_id',
      },
    })

    return response.data.data
  } catch (error) {
    console.error('Error retrieving artworks:', error)
    throw error
  }
}

export async function fetchRecommendedArtworks(): Promise<Artwork[]> {
  try {
    const response: AxiosResponse = await instance.get('artworks', {
      params: {
        page: getRandomPageNumber(1, 500),
        limit: ART_RECOMMENDED_LIMIT_FOR_PAGE,
        fields: 'id,title,artist_title,image_id',
      },
    })

    return response.data.data
  } catch (error) {
    console.error('Error retrieving artworks:', error)
    throw error
  }
}

export const fetchArtworkById = async (id: number): Promise<ArtworkById> => {
  try {
    const response = await instance.get<Artwork>(`/artworks/${id}`, {
      params: {
        id,
        fields:
          'date_start,date_end,credit_line,dimensions,place_of_origin,copyright_notice,artist_title,title,image_id',
      },
    })
    return response.data.data
  } catch (error) {
    console.error('Error retrieving artwork:', error)
    throw error
  }
}
