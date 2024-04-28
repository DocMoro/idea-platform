import * as ToggleGroup from '@radix-ui/react-toggle-group'
import './customToggleGroup.scss'
import clsx from 'clsx'
import { FC } from 'react'

type CustomToggleGroup = {
  className?: string
}

export const CustomToggleGroup: FC<CustomToggleGroup> = ({ className }) => (
  <ToggleGroup.Root
    className={clsx('ToggleGroup', className)}
    type="single"
    defaultValue="left"
    aria-label="Text alignment"
  >
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="left"
      aria-label="Left aligned"
    >
      RUB
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="center"
      aria-label="Center aligned"
    >
      USD
    </ToggleGroup.Item>
    <ToggleGroup.Item
      className="ToggleGroupItem"
      value="right"
      aria-label="Right aligned"
    >
      EUR
    </ToggleGroup.Item>
  </ToggleGroup.Root>
)
