import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import s from './customCheckbox.module.scss'
import { FC } from 'react'

type CustomCheckboxProps = {
  text: string
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({ text }) => (
  <div className={s.container}>
    <Checkbox.Root className={s.root} id={text}>
      <Checkbox.Indicator className={s.indicator}>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className={s.label} htmlFor={text}>
      {text}
    </label>
  </div>
)
