import Chat from '@components/Chat';
import { IChat, IDM } from '@typings/db';
import React, { useCallback, VFC, RefObject } from 'react';
import { ChatZone, Section, StickyHeader } from './styles';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  scrollRef: RefObject<Scrollbars>;
  chatSections: { [key: string]: (IDM | IChat)[] };
  setSize: (f: (size: number) => number) => Promise<(IDM | IChat)[][] | undefined>;
  isReachingEnd?: boolean;
}

const ChatList: VFC<Props> = ({ chatSections, setSize, isReachingEnd, scrollRef }) => {
  const onScroll = useCallback((values: any) => {
    if (values.scrollTop === 0 && !isReachingEnd) {
      setSize((prevSize) => prevSize + 1).then(() => {
        if (scrollRef?.current) {
          scrollRef.current?.scrollTop(scrollRef.current?.getScrollHeight() - values.scrollHeight);
        }
      });
    }
  }, []); //스크롤시 채팅들 생기게하려고 (데이터 추가 로딩)
  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollRef} onScrollFrame={onScroll}>
        {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                {chats.map((chat) => (
                  <Chat key={chat.id} data={chat} />
                ))}
              </StickyHeader>
            </Section>
          );
        })}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
