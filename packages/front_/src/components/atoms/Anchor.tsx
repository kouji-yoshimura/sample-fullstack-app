import React, { ReactNode } from 'react'
import { Link } from '@reach/router'
import { Color, BLUE } from '../../constants/Color'
import { Size } from '../../constants/Size'
// import styles from '../styles/atoms/anchor.module.scss'

export interface AnchorProps {
  href: string
  color?: Color
  size?: Size
  bold?: boolean
  underlined?: boolean
  icon?: JSX.Element
  end?: boolean
  className?: string
  children?: ReactNode
}

// pタグなど文の中で使われる可能性があるのでサイズの初期値は指定しない
const Anchor: React.FC<AnchorProps> = ({
  color = BLUE,
  size,
  bold,
  underlined,
  icon,
  end,
  className,
  children,
  href,
  ...props
}) => {
  const rootClassNames = ""
  // const rootClassNames = [
  //   styles.base,
  //   styles[color],
  //   size && styles[size],
  //   bold && styles.bold,
  //   underlined && styles.underlined,
  //   end && styles.end,
  //   className,
  // ]
  //   .filter(Boolean)
  //   .join(' ')

  return (
    <Link to={href} className={rootClassNames} {...props}>
      {icon}
      {children}
    </Link>
  )
}

export default Anchor
