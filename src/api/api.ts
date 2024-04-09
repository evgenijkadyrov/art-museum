import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { getRandomPageNumber } from '@/utils/createPageRandom'
import {
  ART_LIMIT_FOR_PAGE,
  ART_RECOMMENDED_LIMIT_FOR_PAGE,
  PAGE_NUMBER,
} from '@/constants/constants'

export interface Artwork {
  id: number
  title: string
  artist_title: string
  image_id: string
}

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/',
})
export async function fetchArtworks(): Promise<Artwork[]> {
  try {
    const response: AxiosResponse = await instance.get('artworks', {
      params: {
        page: PAGE_NUMBER,
        limit: ART_LIMIT_FOR_PAGE,
        fields: 'id,title,artist_title,image_id',
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
