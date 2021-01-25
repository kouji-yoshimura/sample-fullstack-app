import React, { ReactNode } from 'react';
import { Color } from '../../constants/Color';
import { Size } from '../../constants/Size';
// import styles from '../styles/atoms/title.module.scss';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface TitleProps {
  level: Level;
  color?: Color;
  size: Size;
  center?: boolean;
  underlined?: boolean;
  space?: boolean;
  className?: string;
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ level, color, size, center, underlined, space, className, ...props }) => {
  const Tag = `h${level}`;
  const classNames = ""
  // const classNames = [
  //   styles.base,
  //   color && styles[color],
  //   styles[size],
  //   underlined && styles.underlined,
  //   space && styles.space,
  //   center && styles.center,
  //   className,
  // ]
  //   .filter(Boolean)
  //   .join(' ');

  return React.createElement(Tag, { className: classNames, ...props });
};

export default Title;
