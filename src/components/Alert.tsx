import { ReactNode } from 'react';

interface Props {
  children: ReactNode; //children to give props freely. ReactNode to support complex Types.
}
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">Alert - {children}</div>;
};

export default Alert;
