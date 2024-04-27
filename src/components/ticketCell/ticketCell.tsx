import { FC } from 'react'

import s from './ticketCell.module.scss'

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

export const TicketCell: FC = () => {
  return (
    <li className={s.ticket}>
      <div className={s.ticket__container}>
        <div className={s.ticket__logo}></div>
        <button className={s.ticket__button}>
          Купить <br />
          за {ticket.price}₽
        </button>
      </div>
      <div></div>
    </li>
  )
}
