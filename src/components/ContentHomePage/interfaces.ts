export interface ArtworkWithImage extends ArtList {
  image_url: string
}

export interface ArtList {
  date_start: number
  date_end: number
  place_of_origin: string
  dimensions: string | null
  credit_line: string
  copyright_notice: string | null
  id: number
  title: string
  artist_title: string
  image_id: string
  isLoading: boolean
}
