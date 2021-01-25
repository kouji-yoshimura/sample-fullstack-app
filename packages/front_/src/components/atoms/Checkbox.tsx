import React from 'react'
import { Size, SizeList, SMALL as DEFAULT_SIZE } from '../../constants/Size'
// import styles from '../styles/atoms/checkbox.module.scss'

export { SizeList, DEFAULT_SIZE }
export type OnChange = (event: React.ChangeEvent<HTMLInputElement>) => void
export interface CheckboxProps {
  label: string
  checked?: boolean
  size?: Size
  block?: boolean
  className?: string
  onChange?: OnChange
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  size = DEFAULT_SIZE,
  block,
  className,
  ...props
}) => {
  // const classNames = [styles.base, styles[size], block && styles.block, className].filter(Boolean).join(' ')
  const classNames = ""

  return (
    <label className={classNames}>
      {/* <input type="checkbox" checked={checked} className={styles.input} {...props} /> */}
      <input type="checkbox" checked={checked} {...props} />
      {label}
    </label>
  )
}

export default Checkbox
