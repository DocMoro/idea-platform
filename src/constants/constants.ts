const dayName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const monthName = [
  'янв',
  'фев',
  'мар',
  'апр',
  'мая',
  'июн',
  'июл',
  'авг',
  'сен',
  'окт',
  'ноя',
  'дек'
]

interface ICurrencyRatio {
  [index: string]: number
}

interface ICurrencySymbol {
  [index: string]: string
}

const currencyRatio: ICurrencyRatio = {
  RUB: 1,
  USD: 0.011,
  EUR: 0.01
}

const currencySymbol: ICurrencySymbol = {
  RUB: '₽',
  USD: '$',
  EUR: '€'
}

export { dayName, monthName, currencyRatio, currencySymbol }
