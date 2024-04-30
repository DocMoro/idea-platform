import { FC, useCallback, useContext, useEffect, useState } from 'react'
import clsx from 'clsx'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import s from './CustomToggleGroup.module.scss'
import CurrencyContext from '../../store/CurrencyContext'
import { TCurrency } from '../../constants/type'

type CustomToggleGroupProps = {
  className?: string
}

export const CustomToggleGroup: FC<CustomToggleGroupProps> = ({ className }) => {
  const [state, setState] = useState<TCurrency>('RUB')
  const { setCurrency } = useContext(CurrencyContext)

  const handleChange = useCallback((value: TCurrency) => {
    setState(value)
  }, [])

  useEffect(() => {
    setCurrency(state)
  }, [state])

  return (
    <ToggleGroup.Root
      className={clsx(s.group, className)}
      type="single"
      aria-label="Text alignment"
      onValueChange={handleChange}
      value={state}
    >
      <ToggleGroup.Item
        className={s.item}
        value="RUB"
        aria-label="Left aligned"
        disabled={state === 'RUB' ? true : false}
      >
        RUB
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={s.item}
        value="USD"
        aria-label="Center aligned"
        disabled={state === 'USD' ? true : false}
      >
        USD
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className={s.item}
        value="EUR"
        aria-label="Right aligned"
        disabled={state === 'EUR' ? true : false}
      >
        EUR
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
