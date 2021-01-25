import React, { ReactNode } from 'react';
import { BLUE, GRAY, LIGHT, LIGHT_GRAY, RED } from '../../constants/Color';
import { Size, SMALL } from '../../constants/Size';
// import styles from '../styles/atoms/textLabel.module.scss';

type Color = typeof BLUE | typeof GRAY | typeof LIGHT | typeof LIGHT_GRAY | typeof RED;

export interface TextLabelProps {
  color?: Color;
  size?: Size;
  radius?: boolean;
  className?: string;
  children?: ReactNode;
}

const TextLabel: React.FC<TextLabelProps> = ({ color = LIGHT, size = SMALL, radius, className, ...props }) => {
  const classNames = [/*styles.base, styles[color], styles[size], radius && styles.radius, */className]
    .filter(Boolean)
    .join(' ');

  return <p className={classNames} {...props} />;
};

export default TextLabel;
