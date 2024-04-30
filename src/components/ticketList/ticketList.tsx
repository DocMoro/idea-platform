import { FC } from 'react'
import { TicketCell } from '../TicketCell'
import { TTicket } from '../../constants/type'
import s from './TicketList.module.scss'

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
