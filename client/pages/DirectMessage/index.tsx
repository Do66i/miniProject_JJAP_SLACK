import React, { useCallback } from 'react';
import { Container, Header } from './styles';
import gravatar from 'gravatar';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router';
import { IDM, IUser } from '@typings/db';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import axios from 'axios';

const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR<IUser | false>(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR('/api/users', fetcher);
  const { data: chatData, mutate: mutateChat } = useSWR<IDM[]>(
    `/api/workspaces/${workspace}/dms/${id}/chats?perPage=20&page=1`,
    fetcher,
  ); //채팅받아오는 API
  const [chat, onChangeChat, setChat] = useInput('');
  const onSubmitForm = useCallback(
    (e: any) => {
      e.preventDefault();
      console.log('--------- CHAT !!', chat);
      if (chat?.trim()) {
        axios
          .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
            content: chat,
          })
          .then((res) => {
            mutateChat(chatData);
            setChat('');
            console.log('----------------- MutateChat', chatData);
          })
          .catch((err) => {
            console.log('----------- 루저ㅋ', err);
          });
      }
    },
    [chat],
  );

  if (!userData || !myData) {
    return null;
  }

  console.log(userData);

  return (
    <Container>
      <Header>
        <img src={gravatar.url(userData?.email, { s: '24px', d: 'retro' })} alt={userData?.toString()} />
        <span>{userData?.nickname}</span>
      </Header>
      <ChatList chatData={chatData} />
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
};

export default DirectMessage;
