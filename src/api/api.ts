import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { getRandomPageNumber } from '@/utils/createPageRandom'
import { ART_LIMIT_FOR_PAGE, ART_RECOMMENDED_LIMIT_FOR_PAGE } from '@/constants/constants'
import { Pagination } from '@/hooks/useFetchPaginationInfo'

export interface Artwork {
  id: number
  title: string
  artist_title: string
  image_id: string
}

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/',
})
export async function fetchArtworks(currentPage: number): Promise<Artwork[]> {
  try {
    const response: AxiosResponse = await instance.get('artworks', {
      params: {
        page: currentPage,
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
export async function fetchPaginationInfo(): Promise<Pagination> {
  try {
    const response: AxiosResponse = await instance.get(
      'artworks/search?query[term][is_public_domain]=true&limit=3'
    )
    return response.data.pagination
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
