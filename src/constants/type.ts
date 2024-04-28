type TTicket = {
  id: number
  origin: string
  origin_name: string
  destination: string
  destination_name: string
  departure_date: string
  departure_time: string
  arrival_date: string
  arrival_time: string
  carrier: string
  stops: number
  price: number
}

type TFilters = {
  [index: string]: boolean
}

export type { TTicket, TFilters }
