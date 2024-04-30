import { FC } from 'react'
import { TTicket } from '../../constants/type'
import { currencySymbol } from '../../constants/constants'
import { getDateString, getPriceString, getStopsString } from '../../utils/pureFunc'
import s from './TicketCell.module.scss'

type TicketCellProps = {
  ticket: TTicket
  currency: string
}

export const TicketCell: FC<TicketCellProps> = ({ ticket, currency }) => {
  const {
    price,
    departure_time,
    stops,
    arrival_time,
    origin,
    origin_name,
    destination,
    destination_name,
    arrival_date,
    departure_date
  } = ticket

  const priceStr = `${getPriceString(price)}${currencySymbol[currency]}`
  const stopsStr = getStopsString(stops)
  const dateDepartureStr = getDateString(departure_date)
  const dateArrivalStr = getDateString(arrival_date)

  return (
    <li className={s.ticket}>
      <div className={s.left}>
        <div className={s.logo}></div>
        <button className={s.button}>
          Купить <br />
          за {priceStr}
        </button>
      </div>
      <div className={s.right}>
        <div className={s.container}>
          <p className={s.time}>{departure_time}</p>
          <div className={s.stopsContainer}>
            <p className={s.stops}>{stopsStr}</p>
            <div className={s.airplane}></div>
          </div>
          <p className={s.time}>{arrival_time}</p>
        </div>
        <div className={s.container}>
          <div className={s.textContainer}>
            <p className={s.text}>{`${origin}, ${origin_name}`}</p>
            <p className={s.date}>{dateDepartureStr}</p>
          </div>
          <div className={s.textContainer}>
            <p className={s.text}>{`${destination_name}, ${destination}`}</p>
            <p className={s.date}>{dateArrivalStr}</p>
          </div>
        </div>
      </div>
    </li>
  )
}
