import { ReactNode } from 'react';

interface Props {
  children: string;
  color: 'primary' | 'info' | 'warning';
  onHandleClick: () => void;
}
const Button = ({ color, children, onHandleClick }: Props) => {
  return (
    <div>
      <button onClick={() => onHandleClick()} className={`btn btn-${color}`}>
        {children}
      </button>
    </div>
  );
};

export default Button;
