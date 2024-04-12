import { useEffect, useState } from 'react'
import { ArtworkByIdWithImage } from '@/types/interfaces'

export interface UseToggleFavoriteArtProps {
  favorites: ArtworkByIdWithImage[]
  handleClickFavorite: (el: ArtworkByIdWithImage) => void
}

export const useToggleFavoriteArt = (): UseToggleFavoriteArtProps => {
  const [favorites, setFavorites] = useState<ArtworkByIdWithImage[]>([])

  const handleClickFavorite = ({
    id,
    title,
    artist_title,
    image_id,
    imageUrl,
  }: ArtworkByIdWithImage) => {
    const updatedFavorites = [...favorites]
    const index = updatedFavorites.findIndex((favorite) => favorite.id === id)
    if (index !== -1) {
      updatedFavorites.splice(index, 1)
    } else {
      const newFavorite = {
        id,
        title,
        artist_title,
        image_id,
        imageUrl,
      } as ArtworkByIdWithImage
      updatedFavorites.push(newFavorite)
    }
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }
  useEffect(() => {
    const localStorageFavorites = localStorage.getItem('favorites')
    if (localStorageFavorites) {
      setFavorites(JSON.parse(localStorageFavorites))
    }
  }, [])

  return { favorites, handleClickFavorite }
}
