export interface Artwork {
  id: number
  title: string
  artist_title: string
  image_id: string
}

export interface ArtworkById extends Artwork {
  date_start: number
  date_end: number
  place_of_origin: string
  dimensions: string | null
  credit_line: string
  copyright_notice: string | null
}

export interface ArtworkByIdWithImage extends ArtworkById {
  imageUrl: string
}
interface Pagination {
  total_pages: number
  current_page: number
  limit: number
  offset: number
  total: number
}
export interface ArtworkSearch {
  pagination: Pagination
  data: {
    api_link: string
    id: number
    title: string
  }[]
}
