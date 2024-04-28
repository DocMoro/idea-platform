import { FC, useCallback } from 'react'
import { CustomCheckbox } from '../customCheckbox'
import s from './filteringForm.module.scss'
import { CustomToggleGroup } from '../customToggleGroup'
import { TFilters } from '../../constants/type'

type FilteringFormProps = {
  setCurrency: (value: string) => void
  filters: TFilters
  setFilters: (object: TFilters) => void
}

export const FilteringForm: FC<FilteringFormProps> = ({ setCurrency, filters, setFilters }) => {
  const handleReset = useCallback((value: string) => {
    const newState: TFilters = {}

    for (const key in filters) {
      if (key === value) {
        newState[key] = true
      } else {
        newState[key] = false
      }
    }
    setFilters(newState)
  }, [])

  return (
    <form className={s.form}>
      <h3 className={s.title}>Валюта</h3>
      <CustomToggleGroup className={s.toggleGroup} setCurrency={setCurrency} />
      <h3 className={s.title}>Количество пересадок</h3>
      <ul className={s.checkboxList}>
        <li className={s.checkboxCell}>
          <CustomCheckbox text="Все" value="all" filters={filters} setFilters={setFilters} />
          <button className={s.reset} type="button" onClick={() => handleReset('all')}>
            Только
          </button>
        </li>
        <li className={s.checkboxCell}>
          <CustomCheckbox
            text="Без пересадок"
            value="0"
            filters={filters}
            setFilters={setFilters}
          />
          <button className={s.reset} type="button" onClick={() => handleReset('0')}>
            Только
          </button>
        </li>
        <li className={s.checkboxCell}>
          <CustomCheckbox text="1 пересадка" value="1" filters={filters} setFilters={setFilters} />
          <button className={s.reset} type="button" onClick={() => handleReset('1')}>
            Только
          </button>
        </li>
        <li className={s.checkboxCell}>
          <CustomCheckbox text="2 пересадки" value="2" filters={filters} setFilters={setFilters} />
          <button className={s.reset} type="button" onClick={() => handleReset('2')}>
            Только
          </button>
        </li>
        <li className={s.checkboxCell}>
          <CustomCheckbox text="3 пересадки" value="3" filters={filters} setFilters={setFilters} />
          <button className={s.reset} type="button" onClick={() => handleReset('3')}>
            Только
          </button>
        </li>
      </ul>
    </form>
  )
}
