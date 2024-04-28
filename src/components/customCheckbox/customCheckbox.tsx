import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import './customCheckbox.scss'
import { FC } from 'react'

type CustomCheckboxProps = {
  text: string
}

export const CustomCheckbox: FC<CustomCheckboxProps> = ({ text }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Checkbox.Root className="CheckboxRoot" defaultChecked id="c1">
      <Checkbox.Indicator className="CheckboxIndicator">
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className="Label" htmlFor="c1">
      {text}
    </label>
  </div>
)
