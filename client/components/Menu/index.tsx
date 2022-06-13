import React, { FC, CSSProperties, useCallback } from 'react';
import { CloseModalButton, CreateMenu } from './styles';

interface Props {
  show: boolean;
  onCloseModal: () => void;
  style: CSSProperties;
  closeButton?: boolean;
  children: React.ReactNode;
}

const Menu: FC<Props> = ({ children, style, show, onCloseModal, closeButton }) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);
  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style} onClick={stopPropagation}></div>
      {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
      {children}
    </CreateMenu>
  );
};

Menu.defaultProps = {
  closeButton: true,
}; // 상위 컴포넌트에서 closeButton를 따로 true로 명시안해줘도 여기 코드때문에 항상 true로 되어있음.

export default Menu;
