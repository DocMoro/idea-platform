import { FC } from 'react'
import { TicketCell } from '../../components/ticketCell'

const ticket = {
  origin: 'VVO',
  origin_name: 'Владивосток',
  destination: 'TLV',
  destination_name: 'Тель-Авив',
  departure_date: '12.05.18',
  departure_time: '16:50',
  arrival_date: '12.05.18',
  arrival_time: '23:35',
  carrier: 'SU',
  stops: 1,
  price: 16700
}

type TicketsPageProps = {}

export const TicketsPage: FC<TicketsPageProps> = () => {
  return (
    <div style={{ width: 663 }}>
      <TicketCell ticket={ticket} />
    </div>
  )
}
