import { createContext } from 'react'
import { TFilters } from '../constants/type'

type TFilteringContext = {
  filters: TFilters
  setFilters: (state: TFilters) => void
}

const FilteringContext = createContext<TFilteringContext>({
  filters: {},
  setFilters: () => {}
})
export default FilteringContext
