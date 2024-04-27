import { FC, useState } from 'react'
import { TicketList } from '../../components/ticketList'
import data from '../../constants/tickets.json'
import { TTicket } from '../../constants/type'

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
  const [tickets, setTickets] = useState<TTicket[]>(sortDataWithId)

  return (
    <div style={{ width: 663 }}>
      <TicketList tickets={tickets} />
    </div>
  )
}
