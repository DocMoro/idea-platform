import { FC } from 'react'
import { FilterCell } from '../FilterCell'
import { CustomToggleGroup } from '../CustomToggleGroup'
import { checkboxData } from '../../constants/constants'
import s from './FilteringForm.module.scss'

export const FilteringForm: FC = () => {
  return (
    <form className={s.form}>
      <h3 className={s.title}>Валюта</h3>
      <CustomToggleGroup className={s.toggleGroup} />
      <h3 className={s.title}>Количество пересадок</h3>
      <ul className={s.checkboxList}>
        {checkboxData.map((data) => (
          <FilterCell text={data[0]} value={data[1]} />
        ))}
      </ul>
    </form>
  )
}
