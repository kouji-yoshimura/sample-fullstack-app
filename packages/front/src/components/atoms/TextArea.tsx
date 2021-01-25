import React from 'react';
// import styles from '../styles/atoms/textArea.module.scss';

export interface TextAreaProps {
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ className, ...props }) => {
  return <textarea className={[/*styles.container, */className].join(' ')} {...props}></textarea>;
};

export default TextArea;
