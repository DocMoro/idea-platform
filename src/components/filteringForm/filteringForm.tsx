import { FC } from 'react'
import { CustomCheckbox } from '../customCheckbox'
import s from './filteringForm.module.scss'
import { CustomToggleGroup } from '../customToggleGroup'

export const FilteringForm: FC = () => {
  return (
    <form className={s.form}>
      <h3 className={s.title}>Валюта</h3>
      <CustomToggleGroup className={s.toggleGroup} />
      <h3 className={s.title}>Количество пересадок</h3>
      <ul className={s.checkboxList}>
        <li className={s.checkboxCell}>
          <CustomCheckbox text="Все" />
          <button className={s.reset} type="button">
            Только
          </button>
        </li>
        <li className={s.checkboxCell}>
          <CustomCheckbox text="Без пересадок" />
          <button className={s.reset} type="button">
            Только
          </button>
        </li>
        <li className={s.checkboxCell}>
          <CustomCheckbox text="1 пересадка" />
          <button className={s.reset} type="button">
            Только
          </button>
        </li>
        <li className={s.checkboxCell}>
          <CustomCheckbox text="2 пересадки" />
          <button className={s.reset} type="button">
            Только
          </button>
        </li>
        <li className={s.checkboxCell}>
          <CustomCheckbox text="3 пересадки" />
          <button className={s.reset} type="button">
            Только
          </button>
        </li>
      </ul>
    </form>
  )
}
