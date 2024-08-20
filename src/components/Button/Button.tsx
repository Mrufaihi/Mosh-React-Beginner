import { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  children: string;
  color?: 'primary' | 'secondary';
  onHandleClick?: () => void;
}
const Button = ({ color, children, onHandleClick }: Props) => {
  return (
    <div>
      <button
        className={[styles.btn, styles['btn-' + color]].join(' ')}
        onClick={onHandleClick} //changed was-> ()=> onHandleClick()
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
