import React, { ReactNode } from 'react'
import { Link } from '@reach/router'
import { Color, LIGHT } from '../../constants/Color'
import { Size, SMALL } from '../../constants/Size'
// import styles from '../styles/atoms/button.module.scss'

export type OnClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => void

export interface ButtonProps {
  color?: Color
  size?: Size
  block?: boolean
  center?: boolean
  stretch?: boolean
  radius?: boolean
  bordered?: boolean
  shadow?: boolean
  disabled?: boolean
  icon?: JSX.Element
  end?: boolean
  separate?: boolean
  className?: string
  href?: string
  children?: ReactNode
  onClick?: OnClick
}

const Button: React.FC<ButtonProps> = ({
  color = LIGHT,
  size = SMALL,
  block,
  center,
  stretch,
  radius,
  bordered,
  shadow,
  icon,
  end,
  separate,
  className,
  href,
  children,
  ...props
}) => {
  const rootClassNames = ""
  // const rootClassNames = [
  //   styles.base,
  //   styles[color],
  //   styles[size],
  //   block && styles.block,
  //   center && styles.center,
  //   stretch && styles.stretch,
  //   radius && styles.radius,
  //   bordered && styles.bordered,
  //   shadow && styles.shadow,
  //   icon && end && styles.end,
  //   icon && separate && block && styles.separate,
  //   className,
  // ]
  //   .filter(Boolean)
  //   .join(' ')

  if (href) {
    return (
      <Link to={href} className={rootClassNames} {...props}>
        {icon}
        {children}
      </Link>
    )
  } else {
    return (
      <button type="button" className={rootClassNames} {...props}>
        {icon}
        {children}
      </button>
    )
  }
}

export default Button
