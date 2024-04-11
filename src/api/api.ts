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

// export interface Pagination {
//   total: number
//   limit: number
//   offset: number
//   total_pages: number
//   current_page: number
// }

export interface ArtworkById extends Artwork {
  date_start: number
  date_end: number
  place_of_origin: string
  dimensions: string | null
  credit_line: string
  copyright_notice: string | null
}

export interface ArtResponse<T> {
  pagination: Pagination
  data: T[]
}

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.artic.edu/api/v1/',
})

export async function fetchArtworks(currentPage: number): Promise<ArtResponse<Artwork>> {
  try {
    const response: AxiosResponse = await instance.get('artworks', {
      params: {
        page: currentPage,
        limit: ART_LIMIT_FOR_PAGE,
        fields: 'id,title,artist_title,image_id',
      },
    })

    return response.data
  } catch (error) {
    console.error('Error retrieving artworks:', error)
    throw error
  }
}

// export async function fetchPaginationInfo(): Promise<Pagination> {
//   try {
//     const response: AxiosResponse = await instance.get(
//       'artworks/search?query[term][is_public_domain]=true&limit=3'
//     )
//     return response.data.pagination
//   } catch (error) {
//     console.error('Error retrieving artworks:', error)
//     throw error
//   }
// }
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
    const response = await instance.get<Artwork>(
      `/artworks/${id}?fields=date_start,date_end,credit_line,dimensions,place_of_origin,copyright_notice,artist_title,title,image_id`
    )
    return response.data.data
  } catch (error) {
    console.error('Error retrieving artwork:', error)
    throw error
  }
}

export interface SearchArtWork {
  _score: number
  title: string
  id: number
}

export const searchArtwork = async (value: string, page): Promise<ArtResponse<SearchArtWork>> => {
  try {
    const response: AxiosResponse = await instance.get('/artworks/search', {
      params: {
        page,
        limit: ART_LIMIT_FOR_PAGE,
        fields: 'id,title',
        q: value,
      },
    })
    return response.data
  } catch (error) {
    console.error('Error retrieving artwork:', error)
    throw error
  }
}
