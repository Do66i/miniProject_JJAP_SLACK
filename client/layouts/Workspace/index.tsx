import axios from 'axios';
import React, { FC, useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Route, Routes, useNavigate } from 'react-router';
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
  WorkspaceButton,
  AddButton,
  WorkspaceModal,
} from './styles';
import gravatar from 'gravatar';
import Menu from '@components/Menu';
import { Link } from 'react-router-dom';
import { IUser } from '@typings/db';
import useInput from '@hooks/useInput';
import { toast } from 'react-toastify';
import CreactChanneModal from '@components/CreactChanneModal';
import loadable from '@loadable/component';
import Modal from '@components/Modal';
import { Button, Input, Label } from '@pages/SignUp/styles';

const Channel = loadable(() => import('@pages/Channel'));
const DirectMessage = loadable(() => import('@pages/DirectMessage'));

const Workspace: FC<React.PropsWithChildren<{}>> = () => {
  const {
    data: userData,
    error,
    mutate,
  } = useSWR<IUser | false>('http://localhost:3095/api/users', fetcher, {
    dedupingInterval: 2000,
  });

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false);
  const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [newWorkspace, onChangeNewWorkspace, setNewWorkspace] = useInput('');
  const [newUrl, onChangeNewUrl, setNewUrl] = useInput('');

  const navigate = useNavigate();
  useEffect(() => {
    console.log('userData 변경 on--------------', userData ?? '데이터들어오는중');
    if (!userData || userData === undefined) {
      navigate('/login');
    }
  }, [userData]);

  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        console.log('로그아웃 성공 !', userData);
        mutate(false, false);
        //! navigate('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onCloseUserProfile = useCallback((e: any) => {
    e.stopPropagation();
    setShowUserMenu(false);
  }, []);

  const onClickUserProfile = useCallback(() => {
    // console.trace('------------click', showUserMenu);
    setShowUserMenu((prev) => !prev);
  }, []);

  const onClickCreateWorkspace = useCallback(() => {
    setShowCreateWorkspaceModal(true);
  }, []);

  const toggleWorkspaceModal = useCallback(() => {
    setShowWorkspaceModal((prev) => !prev);
  }, []);

  const onClickAddChannel = useCallback(() => {
    setShowCreateChannelModal(true);
  }, []);

  const onCreateWorkspace = useCallback(
    (e: any) => {
      e.preventDefault();
      if (!newWorkspace || !newWorkspace.trim()) return;
      if (!newUrl || !newUrl.trim()) return;
      axios
        .post(
          'http://localhost:3095/api/workspaces',
          {
            workspace: newWorkspace,
            url: newUrl,
          },
          { withCredentials: true },
        )
        .then(() => {
          mutate();
          setShowCreateWorkspaceModal(false);
          setNewWorkspace('');
          setNewUrl('');
        })
        .catch((error) => {
          console.dir(error);
          toast.error(error.response?.data, { position: 'bottom-center' });
        });
    },
    [newWorkspace, newUrl],
  );

  const onCloseModal = useCallback(() => {
    setShowCreateWorkspaceModal(false);
    setShowCreateChannelModal(false);
  }, []);

  {
    if (!userData) return null;
  }

  return (
    <div>
      <Header>
        <RightMenu>
          <span onClick={onClickUserProfile}>
            <ProfileImg src={gravatar.url(userData?.nickname, { s: '28px', d: 'retro' })} alt={userData?.toString()} />
            {showUserMenu && (
              <Menu style={{ right: '0', top: '38' }} show={showUserMenu} onCloseModal={onCloseUserProfile}>
                <ProfileModal>
                  <img src={gravatar.url(userData?.nickname, { s: '36px', d: 'retro' })} alt={userData?.toString()} />
                  <div>
                    <span id="profile-name">{userData?.nickname}</span>
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
        <Workspaces>
          {userData?.Workspaces?.map((ws) => {
            return (
              <Link key={ws.id} to={`/workspace/${123}/channel/일반`}>
                <WorkspaceButton>{ws.name.slice(0, 1).toUpperCase()}</WorkspaceButton>
              </Link>
            );
          })}
          <AddButton onClick={onClickCreateWorkspace}>+</AddButton>
        </Workspaces>
        <Channels>
          <WorkspaceName onClick={toggleWorkspaceModal}>짭슬랙</WorkspaceName>
          <MenuScroll>
            <Menu show={showWorkspaceModal} onCloseModal={toggleWorkspaceModal} style={{ top: 95, left: 80 }}>
              <WorkspaceModal>
                <h2>JJAP SLACK</h2>
                {/* {<button onClick={onClickInviteWorkspace}>워크스페이스에 사용자 초대</button>} */}
                {<button onClick={onClickAddChannel}>채널만들기</button>}
                <button onClick={onLogout}>로그아웃</button>
              </WorkspaceModal>
            </Menu>
          </MenuScroll>
        </Channels>

        <Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal}>
          <form onSubmit={onCreateWorkspace}>
            <Label id="workspace-label">
              <span>워크스페이스 이름</span>
              <Input id="workspace" value={newWorkspace} onChange={onChangeNewWorkspace} />
            </Label>
            <Label id="workspace-url-label">
              <span>워크스페이스 url</span>
              <Input id="workspace" value={newUrl} onChange={onChangeNewUrl} />
            </Label>
            <Button type="submit">생성하기</Button>
          </form>
        </Modal>
        <Chats>
          <Routes>
            <Route path="/channel/:channel" element={<Channel />} />
            <Route path="/dm/:id" element={<DirectMessage />} />
          </Routes>
        </Chats>
      </WorkspaceWrapper>
      <CreactChanneModal
        show={showCreateChannelModal}
        onCloseModal={onCloseModal}
        setShowCreateChannelModal={setShowCreateChannelModal}
      />
    </div>
  );
};

export default Workspace;
