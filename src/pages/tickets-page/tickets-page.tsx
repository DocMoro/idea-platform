import { FC, useEffect, useMemo, useState } from 'react'
import { useQuery } from '../../hooks/use-query'
import { useNavigate } from 'react-router-dom'

import { TicketsPageContainer } from './tickets-page-container'

import data from '../../constants/tickets.json'
import { TCurrency, TFilters, TTicket } from '../../constants/type'
import { currencyRatio } from '../../constants/constants'

import CurrencyContext from '../../store/CurrencyContext'
import FilteringContext from '../../store/FilteringContext'

const sortDataWithId = data.tickets
  .sort((prev, next) => prev.price - next.price)
  .map((ticket, index) => {
    return {
      ...ticket,
      id: index
    }
  })

export const TicketsPage: FC = () => {
  const [currency, setCurrency] = useState<TCurrency>('RUB')
  const [ticketsData, setTicketsData] = useState<TTicket[]>([])
  const navigate = useNavigate()
  const query = useQuery()
  const [filters, setFilters] = useState<TFilters>(() => {
    const params = query.get('type')?.split('%') || []

    return {
      all: params.includes('all'),
      0: params.includes('0'),
      1: params.includes('1'),
      2: params.includes('2'),
      3: params.includes('3')
    }
  })

  const urlParams = useMemo(() => {
    let arr = []

    for (const param of Object.entries(filters)) {
      if (param[1]) {
        arr.push(param[0])
      }
    }
    return arr.length ? `/?type=${arr.join('%')}` : '/'
  }, [filters])

  useEffect(() => {
    navigate(urlParams)
  }, [urlParams])

  useEffect(() => {
    const check = Object.values(filters).reduce((prev, curr) => prev && !curr, true)
    console.log(filters)

    if (filters['all'] || check) {
      setTicketsData(sortDataWithId)
      return
    }
    const newTickets = sortDataWithId.filter((ticket) => filters[ticket.stops])
    setTicketsData(newTickets)
  }, [query])

  const tickets = useMemo(() => {
    const multiplier = currencyRatio[currency]
    const newTickets = ticketsData.map((ticket) => {
      return {
        ...ticket,
        price: Math.floor(ticket.price * multiplier)
      }
    })
    return newTickets
  }, [currency, ticketsData])

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      <FilteringContext.Provider value={{ filters, setFilters }}>
        <TicketsPageContainer tickets={tickets} />
      </FilteringContext.Provider>
    </CurrencyContext.Provider>
  )
}
