import React, { FC } from 'react';
import { CreateMenu } from './styles';

const Menu: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <CreateMenu>
      <div>마 메뉴다</div>
      {children}
    </CreateMenu>
  );
};

export default Menu;
