import { FC, useCallback, useEffect, useState } from 'react'
import clsx from 'clsx'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import './customToggleGroup.scss'

type CustomToggleGroup = {
  className?: string
  setCurrency: (value: string) => void
}

export const CustomToggleGroup: FC<CustomToggleGroup> = ({ className, setCurrency }) => {
  const [state, setState] = useState('RUB')

  const handleChange = useCallback((value: string) => {
    setState(value)
  }, [])

  useEffect(() => {
    setCurrency(state)
  }, [state])

  return (
    <ToggleGroup.Root
      className={clsx('ToggleGroup', className)}
      type="single"
      aria-label="Text alignment"
      onValueChange={handleChange}
      value={state}
    >
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="RUB"
        aria-label="Left aligned"
        disabled={state === 'RUB' ? true : false}
      >
        RUB
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="USD"
        aria-label="Center aligned"
        disabled={state === 'USD' ? true : false}
      >
        USD
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="ToggleGroupItem"
        value="EUR"
        aria-label="Right aligned"
        disabled={state === 'EUR' ? true : false}
      >
        EUR
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  )
}
