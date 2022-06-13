import axios from 'axios';
import React, { FC, useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { useNavigate } from 'react-router';
import {
  Header,
  ProfileImg,
  RightMenu,
  WorkspaceWrapper,
  Workspaces,
  Channels,
  WorkspaceName,
  Chats,
  MenuScroll,
} from './styles';
import gravatar from 'gravatar';
import Menu from '@components/Menu';

const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { data, error, mutate } = useSWR('http://localhost:3100/api/users', fetcher, {
    dedupingInterval: 100000,
    loadingTimeout: 900000,
  });

  const [showUserMenu, setShowUserMenu] = useState(false);

  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        console.log('로그아웃 성공 !', data);
        mutate(false, false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!data || data === undefined) {
      navigate('/login');
    }
  }, [data]);

  const onClickUserProfile = useCallback(() => {
    setShowUserMenu((prev) => !prev);
  }, [data]);

  console.log('data 변경 on--------------', data ?? '데이터들어오는중');

  return (
    <div>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(data?.nickname, { s: '28px', d: 'retro' })} alt={data?.toString()} />
            {showUserMenu && <Menu>프로필메뉴</Menu>}
          </span>
        </RightMenu>
      </Header>
      <button onClick={onLogout}>로그아웃</button>
      <WorkspaceWrapper>
        <Workspaces>test</Workspaces>
        <Channels>
          <WorkspaceName>JJAP SLACK</WorkspaceName>
          <MenuScroll></MenuScroll>
        </Channels>
        <Chats>{children}</Chats>
      </WorkspaceWrapper>
    </div>
  );
};

export default Workspace;
