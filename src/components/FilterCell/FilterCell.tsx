import { FC, useContext, useEffect, useState } from 'react'
import { TFilters } from '../../constants/type'
import { FilterCellContainer } from './FilterCellContainer'
import FilteringContext from '../../store/FilteringContext'

type FilterCellProps = {
  text: string
  value: string
}

export const FilterCell: FC<FilterCellProps> = ({ text, value }) => {
  const { filters, setFilters } = useContext(FilteringContext)
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
