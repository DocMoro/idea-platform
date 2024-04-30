import { FC, useEffect, useMemo, useState } from 'react'
import { useQuery } from '../../hooks/use-query'
import { useNavigate } from 'react-router-dom'

import { FilteringForm } from '../../components/FilteringForm'
import { TicketList } from '../../components/TicketList'

import data from '../../constants/tickets.json'
import { TFilters, TTicket } from '../../constants/type'
import { currencyRatio } from '../../constants/constants'

import s from './tickets-page.module.scss'

const sortDataWithId = data.tickets
  .sort((prev, next) => prev.price - next.price)
  .map((ticket, index) => {
    return {
      ...ticket,
      id: index
    }
  })

export const TicketsPage: FC = () => {
  const [ticketsData, setTicketsData] = useState<TTicket[]>([])
  const [currency, setCurrency] = useState<string>('RUB')
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
    <section className={s.ticketsSection}>
      <FilteringForm setCurrency={setCurrency} filters={filters} setFilters={setFilters} />
      <TicketList tickets={tickets} currency={currency} />
    </section>
  )
}
