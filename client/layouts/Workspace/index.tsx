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
  ProfileModal,
  LogOutButton,
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
            {showUserMenu && (
              <Menu style={{ right: '0', top: '38' }} show={showUserMenu} onCloseModal={onClickUserProfile}>
                <ProfileModal>
                  <img src={gravatar.url(data?.nickname, { s: '36px', d: 'retro' })} alt={data?.toString()} />
                  <div>
                    <span id="profile-name">{data?.nickname}</span>
                    <span id="profile-active">Active</span>
                  </div>
                  <LogOutButton onClick={onLogout}>로그아웃</LogOutButton>
                </ProfileModal>
              </Menu>
            )}
          </span>
        </RightMenu>
      </Header>
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
