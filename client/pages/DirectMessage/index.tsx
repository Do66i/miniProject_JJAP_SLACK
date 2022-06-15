import React, { useCallback, useEffect, useRef } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Container, Header } from './styles';
import gravatar from 'gravatar';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import fetcher from '@utils/fetcher';
import { useParams } from 'react-router';
import { IDM, IUser } from '@typings/db';
import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import axios from 'axios';
import makeSection from '@utils/makeSection';

const PAGE_SIZE = 20;
const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const { data: userData } = useSWR<IUser | false>(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const { data: myData } = useSWR('/api/users', fetcher);
  const {
    data: chatData,
    mutate: mutateChat,
    setSize,
  } = useSWRInfinite<IDM[]>(
    (index) => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=${PAGE_SIZE}&page=${index + 1}`,
    fetcher,
  ); //채팅받아오는 API
  const scrollbarRef = useRef<Scrollbars>(null);
  const [chat, onChangeChat, setChat] = useInput('');
  const isEmpty = chatData?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < PAGE_SIZE) || false;

  const onSubmitForm = useCallback(() => {}, []);

  // const onSubmitForm = useCallback(
  //   (e: any) => {
  //     e.preventDefault();
  //     if (chat?.trim() && chatData) {
  //       const savedChat = chat;
  //       mutateChat((prevChatData) => {
  //         prevChatData?.[0].unshift({
  //           id: (chatData[0][0]?.id || 0) + 1,
  //           content: savedChat,
  //           SenderId: myData.id,
  //           Sender: myData,
  //           ReceiverId: userData.id,
  //           Receiver: userData,
  //           createdAt: new Date(),
  //         });
  //         return prevChatData;
  //       }, false).then(() => {
  //         localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
  //         setChat('');
  //         if (scrollbarRef.current) {
  //           console.log('scrollToBottom!', scrollbarRef.current?.getValues());
  //           scrollbarRef.current.scrollToBottom();
  //         }
  //       });
  //       axios
  //         .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
  //           content: chat,
  //         })
  //         .catch(console.error);
  //     }
  //   },
  //   [chat, workspace, id, myData, userData, chatData, mutateChat, setChat],
  // );

  useEffect(() => {
    if (chatData?.length === 1) {
      scrollbarRef.current?.scrollToBottom();
    }
  }, [chatData]);

  if (!userData || !myData) {
    return null;
  }

  const chatSections = makeSection(chatData ? ([] as IDM[]).concat(...chatData).reverse() : []);

  console.log(userData);

  return (
    <Container>
      <Header>
        <img src={gravatar.url(userData?.email, { s: '24px', d: 'retro' })} alt={userData?.toString()} />
        <span>{userData?.nickname}</span>
      </Header>
      <ChatList
        chatSections={chatSections}
        ref={scrollbarRef}
        setSize={setSize}
        isEmpty={isEmpty}
        isReachingEnd={isReachingEnd}
      />
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
};

export default DirectMessage;
