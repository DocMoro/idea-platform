import { FC } from 'react'
import { CustomCheckbox } from '../customCheckbox'
import { CustomToggleGroup } from '../customToggleGroup'
import { TFilters } from '../../constants/type'
import { checkboxData } from '../../constants/constants'
import s from './filteringForm.module.scss'

type FilteringFormProps = {
  setCurrency: (value: string) => void
  filters: TFilters
  setFilters: (object: TFilters) => void
}

export const FilteringForm: FC<FilteringFormProps> = ({ setCurrency, filters, setFilters }) => {
  return (
    <form className={s.form}>
      <h3 className={s.title}>Валюта</h3>
      <CustomToggleGroup className={s.toggleGroup} setCurrency={setCurrency} />
      <h3 className={s.title}>Количество пересадок</h3>
      <ul className={s.checkboxList}>
        {checkboxData.map((data) => (
          <CustomCheckbox
            text={data[0]}
            value={data[1]}
            filters={filters}
            setFilters={setFilters}
          />
        ))}
      </ul>
    </form>
  )
}
