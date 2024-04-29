import { FC } from 'react'
import { TTicket } from '../../constants/type'
import { currencySymbol, dayName, monthName } from '../../constants/constants'
import s from './ticketCell.module.scss'

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

  const getStopsString = () => {
    const check = stops % 10
    let result

    if (check > 4 || check === 0) result = 'пересадок'
    else if (check > 1) result = 'пересадки'
    else result = 'пересадка'

    return `${stops} ${result}`
  }

  const getDateString = (dateStr: string) => {
    const year = +('20' + dateStr.slice(6))
    const month = parseInt(dateStr.slice(4, 6))
    const day = parseInt(dateStr.slice(0, 3))

    const date = new Date(year, month, day)

    return `${day} ${monthName[month - 1]} ${year}, ${dayName[date.getDay()]}`
  }

  const getPriceString = () => {
    const thousands = Math.floor(price / 1000)
    const remainder = String(price % 1000)

    return `${thousands || ''} ${thousands ? '000'.slice(remainder.length) + remainder : remainder}`
  }

  const priceStr = `${getPriceString()}${currencySymbol[currency]}`
  const stopsStr = getStopsString()
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
