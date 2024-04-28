import { FC } from 'react'
import { TTicket } from '../../constants/type'
import { TicketCell } from '../ticketCell'
import s from './ticketList.module.scss'

type TicketListProps = {
  tickets: TTicket[]
  currency: string
}

export const TicketList: FC<TicketListProps> = ({ tickets, currency }) => {
  return (
    <ul className={s.list}>
      {tickets.map((ticket) => (
        <TicketCell ticket={ticket} key={ticket.id} currency={currency} />
      ))}
    </ul>
  )
}
