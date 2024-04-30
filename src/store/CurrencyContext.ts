import { createContext } from 'react'
import { TCurrency } from '../constants/type'

type TCurrencyContext = {
  currency: TCurrency
  setCurrency: (state: TCurrency) => void
}

const CurrencyContext = createContext<TCurrencyContext>({
  currency: 'RUB',
  setCurrency: () => 'RUB'
})
export default CurrencyContext
