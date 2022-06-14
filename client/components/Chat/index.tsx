import { IChat, IDM } from '@typings/db';
import React, { VFC } from 'react';
import { ChatWrapper } from './styles';
import gravarta from 'gravatar';
import dayjs from 'dayjs';
import regexifyString from 'regexify-string';

interface Props {
  data: IDM;
}

const Chat: VFC<Props> = ({ data }) => {
  const user = data.Sender;

  return (
    <ChatWrapper>
      <div className="chat-img">
        <img src={gravarta.url(user?.email, { s: '36px', d: 'retro' })} alt={user?.nickname} />
      </div>
      <div className="chat-text">
        <div className="chat-user">
          <b>{user.nickname}</b>
          <span>{dayjs(data.createdAt).format('h:mm A')}</span>
        </div>
        <p>{data.content}</p>
      </div>
    </ChatWrapper>
  );
};

export default Chat;
