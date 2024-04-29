import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import s from './customCheckbox.module.scss'
import { FC, useCallback, useEffect, useState } from 'react'
import { TFilters } from '../../constants/type'

type CustomCheckboxProps = {
  text: string
  value: string
  filters: TFilters
  setFilters: (object: TFilters) => void
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({ text, value, filters, setFilters }) => {
  const [checked, setChecked] = useState(filters[value])

  const handleChecked = useCallback((checked: boolean) => {
    setChecked(checked)
  }, [])

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

  useEffect(() => {
    setFilters({
      ...filters,
      [value]: checked
    })
  }, [checked])

  return (
    <li className={s.checkboxCell}>
      <div className={s.container}>
        <Checkbox.Root
          checked={filters[value]}
          onCheckedChange={handleChecked}
          className={s.root}
          id={value}
        >
          <Checkbox.Indicator className={s.indicator}>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className={s.label} htmlFor={value}>
          {text}
        </label>
      </div>
      <button className={s.reset} type="button" onClick={() => handleReset('3')}>
        Только
      </button>
    </li>
  )
}
