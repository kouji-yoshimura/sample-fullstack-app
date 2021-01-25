import React, { ReactNode } from 'react';
import { Size } from '../../constants/Size';
// import styles from '../styles/atoms/txt.module.scss';

type Align = 'left' | 'center' | 'right';
type Color = 'blue' | 'gray' | 'green' | 'light' | 'lightDark' | 'red' | 'white' | 'transparent';

export interface TxtProps {
  color?: Color;
  size?: Size;
  align?: Align;
  className?: string;
  children?: ReactNode;
}

const Txt: React.FC<TxtProps> = ({ color, size, align, className, children }) => {
  const classNames = ""
  // const classNames = [styles.base, color && styles[color], size && styles[size], align && styles[align], className]
  //   .filter(Boolean)
  //   .join(' ');

  return <p className={classNames}>{children}</p>;
};

export default Txt;
