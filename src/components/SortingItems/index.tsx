import { useState } from 'react'
import { ArtworkByIdWithImage } from '@/types/interfaces'
import SelectComponent from '@components/SortingItems/SelectComponent'
interface SortComponentProps {
  data: ArtworkByIdWithImage[]
  setData: (sortedData: any) => void
}
const SortComponent = ({ data, setData }: SortComponentProps) => {
  const [sortType, setSortType] = useState('')
  console.log('data', data)
  const handleSort = (type) => {
    let sortedData = [...data]

    if (type === 'inc') {
      sortedData.sort((a, b) => a.title.localeCompare(b.title))
    }
    if (type === 'asc') {
      sortedData.sort((a, b) => b.title.localeCompare(a.title))
    }
    if (type === 'latest') {
      sortedData.sort((a, b) => new Date(a.date_end) - new Date(b.date_end))
    }
    if (type === 'newest') {
      sortedData.sort((a, b) => new Date(b.date_end) - new Date(a.date_end))
    }
    console.log('sortedData', sortedData)
    setData(sortedData)
    setSortType(type)
  }

  return (
    <SelectComponent setSortType={handleSort} sortType={sortType} />
    // <div>
    //   <button onClick={() => handleSort('inc')}>
    //     Sort Alphabetically inc
    //   </button>
    //   <button onClick={() => handleSort('asc')}>
    //     Sort Alphabetically asc
    //   </button>
    //   <button onClick={() => handleSort('newest')}>Sort by Date newest</button>
    //   <button onClick={() => handleSort('latest')}>Sort by Date latest</button>
    //
    //
    // </div>
  )
}

export default SortComponent
