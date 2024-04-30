import { FC, useEffect, useState } from 'react'
import { TFilters } from '../../constants/type'
import { FilterCellContainer } from './FilterCellContainer'

type FilterCellProps = {
  text: string
  value: string
  filters: TFilters
  setFilters: (object: TFilters) => void
}

export const FilterCell: FC<FilterCellProps> = ({ text, value, filters, setFilters }) => {
  const [checked, setChecked] = useState(filters[value])

  const handleChecked = (checked: boolean) => {
    setFilters({
      ...filters,
      [value]: checked
    })
  }

  const handleReset = () => {
    const newState: TFilters = {}

    for (const key in filters) {
      if (key === value) {
        newState[key] = true
      } else {
        newState[key] = false
      }
    }
    setFilters(newState)
  }

  useEffect(() => {
    setChecked(filters[value])
  }, [filters])

  return (
    <FilterCellContainer
      text={text}
      value={value}
      checked={checked}
      handleChecked={handleChecked}
      handleReset={handleReset}
    />
  )
}
