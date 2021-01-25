import React from "react"
import { InputType } from "../../constants/InputTypes"
import { Size, SMALL } from "../../constants/Size"
// import styles from "../styles/atoms/input.module.scss"

export interface InputProps {
  size?: Size
  block?: boolean
  placeholder?: string
  className?: string
  type?: InputType
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ size = SMALL, block, className, ...props }) => {
  // const classNames = [styles.base, styles[size], block && styles.block, className].filter(Boolean).join(" ")
  const classNames = ""

  return <input className={classNames} {...props}></input>
}

export default Input
