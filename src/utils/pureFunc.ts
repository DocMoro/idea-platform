import { dayName, monthName } from '../constants/constants'

export const getStopsString = (stops: number) => {
  const check = stops % 10
  let result

  if (check > 4 || check === 0) result = 'пересадок'
  else if (check > 1) result = 'пересадки'
  else result = 'пересадка'

  return `${stops} ${result}`
}

export const getDateString = (dateStr: string) => {
  const year = +('20' + dateStr.slice(6))
  const month = parseInt(dateStr.slice(4, 6))
  const day = parseInt(dateStr.slice(0, 3))

  const date = new Date(year, month, day)

  return `${day} ${monthName[month - 1]} ${year}, ${dayName[date.getDay()]}`
}

export const getPriceString = (price: number) => {
  const thousands = Math.floor(price / 1000)
  const remainder = String(price % 1000)

  return `${thousands || ''} ${thousands ? '000'.slice(remainder.length) + remainder : remainder}`
}
