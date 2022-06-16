import io from 'socket.io-client';
import { useCallback } from 'react';
import axios from 'axios';

const sockets: { [key: string]: SocketIOClient.Socket } = {};
const backUrl =
  process.env.NODE_ENV === 'production'
    ? 'http://ec2-3-39-195-4.ap-northeast-2.compute.amazonaws.com:3095/'
    : 'http://localhost:3095/';

const useSocket = (workspace?: string): [SocketIOClient.Socket | undefined, () => void] => {
  const disconnet = useCallback(() => {
    if (workspace && sockets[workspace]) {
      sockets[workspace].disconnect();
      delete sockets[workspace];
    }
  }, [workspace]);

  if (!workspace) {
    return [undefined, disconnet];
  }

  if (!sockets[workspace]) {
    sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`, {
      transports: ['websocket'],
    });
  }

  return [sockets[workspace], disconnet];
};

export default useSocket;
