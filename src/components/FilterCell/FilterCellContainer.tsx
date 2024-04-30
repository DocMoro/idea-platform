import { FC } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import s from './FilterCell.module.scss'

type FilterCellContainerProps = {
  text: string
  value: string
  checked: boolean
  handleChecked: (checked: boolean) => void
  handleReset: () => void
}

export const FilterCellContainer: FC<FilterCellContainerProps> = ({
  text,
  value,
  checked,
  handleChecked,
  handleReset
}) => {
  return (
    <li className={s.checkboxCell}>
      <div className={s.container}>
        <Checkbox.Root
          checked={checked}
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
      <button className={s.reset} type="button" onClick={handleReset}>
        Только
      </button>
    </li>
  )
}
