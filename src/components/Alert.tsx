import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode; //children to give props freely. ReactNode to support complex Types.
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-warning alert-dismissible">
        {children}
        <button onClick={onClose} className="btn-close"></button>
      </div>
    </>
  );
};

export default Alert;
