import { FC } from 'react'

import { FilteringForm } from '../../components/FilteringForm'
import { TicketList } from '../../components/TicketList'

import { TTicket } from '../../constants/type'

import s from './tickets-page.module.scss'

type TicketsPageContainerProps = {
  tickets: TTicket[]
}

export const TicketsPageContainer: FC<TicketsPageContainerProps> = ({ tickets }) => {
  return (
    <section className={s.ticketsSection}>
      <FilteringForm />
      <TicketList tickets={tickets} />
    </section>
  )
}
