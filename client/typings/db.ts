export interface IUser {
  id: number;
  nickname: string;
  email: string;
  Workspaces: IWorkspace[];
}

export interface IUserWithOnline extends IUser {
  online: boolean;
}

export interface IChannel {
  id: number;
  name: string;
  private: boolean; // 비공개 채널 여부, 강좌에서는 모두 false(공개)
  WorkspaceId: number;
}

export interface IChat {
  // 채널의 채팅
  id: number;
  UserId: number;
  User: IUser; // 보낸 사람
  content: string;
  createdAt: Date;
  ChannelId: number;
  Channel: IChannel;
}

export interface IDM {
  // DM 채팅
  id: number;
  SenderId: number; // 보낸 사람 아이디
  Sender: IUser;
  ReceiverId: number; // 받는 사람 아이디
  Receiver: IUser;
  content: string;
  createdAt: Date;
}

export interface IWorkspace {
  id: number;
  name: string;
  url: string; // 주소 창에 보이는 주소
  OwnerId: number; // 워크스페이스 만든 사람 아이디
}

/* 서버 개발자가 타입을 정해줘서 준 것 이라는 가정하에 코드짜는중임 
보통 이렇게 타입 정해서 주나? 그건 모르겟음 

백엔드개발자가 정해서 준다고 함*/
