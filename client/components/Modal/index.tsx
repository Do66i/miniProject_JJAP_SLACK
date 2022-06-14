import React, { FC, useCallback } from 'react';
import { CloseModalButton, CreateModal } from './styles';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  children: React.ReactNode;
}

const Modal: FC<Props> = ({ show, onCloseModal, children }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
