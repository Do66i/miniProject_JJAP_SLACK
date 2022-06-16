// import React, { useCallback, useEffect, useRef } from 'react';
// import { Scrollbars } from 'react-custom-scrollbars';
// import { Container, Header } from './styles';
// import gravatar from 'gravatar';
// import useSWR from 'swr';
// import useSWRInfinite from 'swr/infinite';
// import fetcher from '@utils/fetcher';
// import { useParams } from 'react-router';
// import { IDM, IUser } from '@typings/db';
// import ChatBox from '@components/ChatBox';
// import ChatList from '@components/ChatList';
// import useInput from '@hooks/useInput';
// import axios from 'axios';
// import makeSection from '@utils/makeSection';
// import useSocket from '@hooks/useSocket';

// const PAGE_SIZE = 20;
// const DirectMessage = () => {
//   const { workspace, id } = useParams<{ workspace: string; id: string }>();
//   const { data: userData } = useSWR<IUser>(`/api/workspaces/${workspace}/users/${id}`, fetcher);
//   const { data: myData } = useSWR<IUser>('/api/users', fetcher);
//   const {
//     data: chatData,
//     mutate: mutateChat,
//     setSize,
//   } = useSWRInfinite<IDM[]>(
//     (index) => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=${PAGE_SIZE}&page=${index + 1}`,
//     fetcher,
//   ); //채팅받아오는 API
//   const scrollbarRef = useRef<Scrollbars>(null);
//   const [chat, onChangeChat, setChat] = useInput('');
//   const [socket] = useSocket(workspace);
//   const isEmpty = chatData?.[0]?.length === 0;
//   const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < PAGE_SIZE) || false;

//   const onSubmitForm = useCallback(
//     (e: any) => {
//       e.preventDefault();
//       if (chat?.trim() && chatData) {
//         const savedChat = chat;
//         mutateChat((prevChatData) => {
//           prevChatData?.[0].unshift({
//             id: (chatData[0][0]?.id || 0) + 1,
//             content: savedChat,
//             SenderId: myData!.id,
//             Sender: myData!,
//             ReceiverId: userData!.id,
//             Receiver: userData!,
//             createdAt: new Date(),
//           });
//           return prevChatData;
//         }, false).then(() => {
//           localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
//           setChat('');
//           if (scrollbarRef.current) {
//             // console.log('scrollToBottom!', scrollbarRef.current?.getValues());
//             scrollbarRef.current.scrollToBottom();
//           }
//         });
//         axios
//           .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
//             content: chat,
//           })
//           .catch(console.error);
//       }
//     },
//     [chat, workspace, id, myData, userData, chatData, mutateChat, setChat],
//   );

//   const onMessage = useCallback((data: IDM) => {
//     // id는 상대방 아이디
//     if (data?.SenderId === Number(id) && myData?.id !== Number(id)) {
//       mutateChat((chatData) => {
//         chatData?.[0].unshift(data);
//         return chatData;
//       }, false).then(() => {
//         if (scrollbarRef.current) {
//           if (
//             scrollbarRef.current.getScrollHeight() <
//             scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150
//           ) {
//             // console.log('scrollToBottom!', scrollbarRef.current?.getValues());
//             setTimeout(() => {
//               scrollbarRef.current?.scrollToBottom();
//             }, 50);
//           }
//         }
//       });
//     }
//   }, []);

//   useEffect(() => {
//     socket?.on('dm', onMessage);
//     return () => {
//       socket?.off('dm', onMessage);
//     };
//   }, [socket, onMessage]);

//   useEffect(() => {
//     if (chatData?.length === 1) {
//       scrollbarRef.current?.scrollToBottom();
//     }
//   }, [chatData]);

//   if (!userData || !myData) {
//     return null;
//   }

//   const chatSections = makeSection(chatData ? ([] as IDM[]).concat(...chatData).reverse() : []);

//   return (
//     <Container>
//       <Header>
//         <img src={gravatar.url(userData?.email, { s: '24px', d: 'retro' })} alt={userData?.toString()} />
//         <span>{userData?.nickname}</span>
//       </Header>
//       <ChatList chatSections={chatSections} scrollRef={scrollbarRef} setSize={setSize} isReachingEnd={isReachingEnd} />
//       <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
//     </Container>
//   );
// };

// export default DirectMessage;

import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import useSocket from '@hooks/useSocket';
import { DragOver } from '@pages/Channel/styles';
import { Header, Container } from '@pages/DirectMessage/styles';
import { IDM, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import makeSection from '@utils/makeSection';
import axios from 'axios';
import gravatar from 'gravatar';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';

const PAGE_SIZE = 20;
const DirectMessage = () => {
  const { workspace, id } = useParams<{ workspace: string; id: string }>();
  const [socket] = useSocket(workspace);
  const { data: myData } = useSWR<IUser>('/api/users', fetcher);
  const { data: userData } = useSWR<IUser>(`/api/workspaces/${workspace}/users/${id}`, fetcher);
  const {
    data: chatData,
    mutate: mutateChat,
    setSize,
  } = useSWRInfinite<IDM[]>(
    (index) => `/api/workspaces/${workspace}/dms/${id}/chats?perPage=${PAGE_SIZE}&page=${index + 1}`,
    fetcher,
    {
      onSuccess(data) {
        if (data?.length === 1) {
          setTimeout(() => {
            scrollbarRef.current?.scrollToBottom();
          }, 100);
        }
      },
    },
  );
  const [chat, onChangeChat, setChat] = useInput('');
  const scrollbarRef = useRef<Scrollbars>(null);
  const [dragOver, setDragOver] = useState(false);

  const isEmpty = chatData?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (chatData && chatData[chatData.length - 1]?.length < PAGE_SIZE);

  const onSubmitForm = useCallback(
    (e: any) => {
      e.preventDefault();
      if (chat?.trim() && chatData) {
        const savedChat = chat;
        mutateChat((prevChatData) => {
          prevChatData?.[0].unshift({
            id: (chatData[0][0]?.id || 0) + 1,
            content: savedChat,
            SenderId: myData!.id,
            Sender: myData!,
            ReceiverId: userData!.id,
            Receiver: userData!,
            createdAt: new Date(),
          });
          return prevChatData;
        }, false).then(() => {
          localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
          setChat('');
          if (scrollbarRef.current) {
            console.log('scrollToBottom!', scrollbarRef.current?.getValues());
            scrollbarRef.current.scrollToBottom();
          }
        });
        axios
          .post(`/api/workspaces/${workspace}/dms/${id}/chats`, {
            content: chat,
          })
          .catch(console.error);
      }
    },
    [chat, workspace, id, myData, userData, chatData, mutateChat, setChat],
  );

  const onMessage = useCallback(
    (data: IDM) => {
      if (data.SenderId === Number(id) && myData?.id !== Number(id)) {
        mutateChat((chatData) => {
          chatData?.[0].unshift(data);
          return chatData;
        }, false).then(() => {
          if (scrollbarRef.current) {
            if (
              scrollbarRef.current.getScrollHeight() <
              scrollbarRef.current.getClientHeight() + scrollbarRef.current.getScrollTop() + 150
            ) {
              console.log('scrollToBottom!', scrollbarRef.current?.getValues());
              setTimeout(() => {
                scrollbarRef.current?.scrollToBottom();
              }, 100);
            } else {
              toast.success('새 메시지가 도착했습니다.', {
                onClick() {
                  scrollbarRef.current?.scrollToBottom();
                },
                closeOnClick: true,
              });
            }
          }
        });
      }
    },
    [id, myData, mutateChat],
  );

  useEffect(() => {
    socket?.on('dm', onMessage);
    return () => {
      socket?.off('dm', onMessage);
    };
  }, [socket, onMessage]);

  useEffect(() => {
    localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
  }, [workspace, id]);

  const onDrop = useCallback(
    (e: any) => {
      e.preventDefault();
      console.log(e);
      const formData = new FormData();
      if (e.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < e.dataTransfer.items.length; i++) {
          // If dropped items aren't files, reject them
          if (e.dataTransfer.items[i].kind === 'file') {
            const file = e.dataTransfer.items[i].getAsFile();
            console.log('... file[' + i + '].name = ' + file.name);
            formData.append('image', file);
          }
        }
      } else {
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < e.dataTransfer.files.length; i++) {
          console.log('... file[' + i + '].name = ' + e.dataTransfer.files[i].name);
          formData.append('image', e.dataTransfer.files[i]);
        }
      }
      axios.post(`/api/workspaces/${workspace}/dms/${id}/images`, formData).then(() => {
        setDragOver(false);
        localStorage.setItem(`${workspace}-${id}`, new Date().getTime().toString());
        mutateChat();
      });
    },
    [workspace, id, mutateChat],
  );

  const onDragOver = useCallback((e: any) => {
    e.preventDefault();
    console.log(e);
    setDragOver(true);
  }, []);

  if (!userData || !myData) {
    return null;
  }

  const chatSections = makeSection(chatData ? ([] as IDM[]).concat(...chatData).reverse() : []);

  return (
    <Container onDrop={onDrop} onDragOver={onDragOver}>
      <Header>
        <img src={gravatar.url(userData.email, { s: '24px', d: 'retro' })} alt={userData.nickname} />
        <span>{userData.nickname}</span>
      </Header>
      <ChatList scrollRef={scrollbarRef} isReachingEnd={isReachingEnd} chatSections={chatSections} setSize={setSize} />
      <ChatBox
        onSubmitForm={onSubmitForm}
        chat={chat}
        onChangeChat={onChangeChat}
        placeholder={`Message ${userData.nickname}`}
      />
      {dragOver && <DragOver>업로드!</DragOver>}
    </Container>
  );
};

export default DirectMessage;
