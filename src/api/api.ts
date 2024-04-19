import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { calcRandomPageNumber } from '@/utils/calcRandomPage.helper'
import { ARTLIST_LIMIT, ART_RECOMMENDED_LIMIT_FOR_PAGE } from '@/constants/constants'
import { Artwork, ArtworkById, ArtworkSearch } from '@/types/interfaces'

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/',
})

export const fetchArtLists = async (): Promise<Artwork[]> => {
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

export const fetchRecommendedArtworks = async (): Promise<Artwork[]> => {
  try {
    const response: AxiosResponse = await instance.get('artworks', {
      params: {
        page: calcRandomPageNumber(1, 500),
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
    const response = await instance.get(`/artworks/${id}`, {
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
export const searchArtworks = async (
  searchValue: string,
  currentPage: number
): Promise<ArtworkSearch> => {
  try {
    const response: AxiosResponse = await instance.get('artworks/search', {
      params: {
        q: searchValue,
        query: {
          term: {
            is_public_domain: true,
          },
        },
        limit: 3,
        page: currentPage,
        fields: 'id,title,api_link',
      },
    })

    return response.data
  } catch (error) {
    console.error('Error retrieving artworks:', error)
    throw error
  }
}
