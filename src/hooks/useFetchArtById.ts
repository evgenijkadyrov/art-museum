import { useEffect, useState } from 'react'
import { ArtworkById, fetchArtworkById } from '@/api/api'
interface ArtworkByIdWithImage extends ArtworkById {
  image_url: string
}
export const useFetchArtById = (id: number) => {
  const [artwork, setArtwork] = useState<ArtworkByIdWithImage | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const artworkData = await fetchArtworkById(id)
      const imageUrl: string = `https://www.artic.edu/iiif/2/${artworkData?.image_id}/full/843,/0/default.jpg`
      const artworkWithImage: ArtworkByIdWithImage = { ...artworkData, image_url: imageUrl }

      setArtwork(artworkWithImage)
    }

    fetchData()
  }, [id])
  return { artwork }
}
