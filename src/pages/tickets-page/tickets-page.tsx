import { FC, useMemo, useState } from 'react'
import { TicketList } from '../../components/ticketList'
import data from '../../constants/tickets.json'
import { TTicket } from '../../constants/type'
import { FilteringForm } from '../../components/filteringForm'
import s from './tickets-page.module.scss'
import { currencyRatio } from '../../constants/constants'

const sortDataWithId = data.tickets
  .sort((prev, next) => prev.price - next.price)
  .map((ticket, index) => {
    return {
      ...ticket,
      id: index
    }
  })

type TicketsPageProps = {}

export const TicketsPage: FC<TicketsPageProps> = () => {
  const [ticketsData, setTicketsData] = useState<TTicket[]>(sortDataWithId)
  const [currency, setCurrency] = useState<string>('RUB')

  const tickets = useMemo(() => {
    const multiplier = currencyRatio[currency]
    const newTickets = sortDataWithId.map((ticket) => {
      return {
        ...ticket,
        price: Math.floor(ticket.price * multiplier)
      }
    })
    return newTickets
  }, [currency, ticketsData])

  return (
    <section className={s.ticketsSection}>
      <FilteringForm setCurrency={setCurrency} />
      <TicketList tickets={tickets} currency={currency} />
    </section>
  )
}
