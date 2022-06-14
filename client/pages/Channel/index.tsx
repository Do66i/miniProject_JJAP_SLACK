import ChatBox from '@components/ChatBox';
import ChatList from '@components/ChatList';
import useInput from '@hooks/useInput';
import React, { useCallback } from 'react';
import { Container, Header } from './styles';

function Channel() {
  const [chat, onChangeChat, setChat] = useInput('');
  const onSubmitForm = useCallback((e: any) => {
    e.preventDefault();
    console.log('보내져라좀');
    setChat('');
  }, []);

  return (
    <Container>
      <Header>채널!</Header>
      <ChatList />
      <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
    </Container>
  );
}

export default Channel;
