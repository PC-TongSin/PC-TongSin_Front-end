import {
  ChatContainer,
  StUpLoading,
  StDownLoading,
  StChatInput,
  StChatBoxContainer,
} from './ChatRoom.styled';
import { useEffect, useState } from 'react';
import ChattingService from '../../../SockJS/SockInstance';

const ChattingServiceKit = new ChattingService();

export const ChatRoom = () => {
  const accessToken = localStorage.getItem('accessToken');
  const [chatLog, setChatLog] = useState([]);
  const [receiveMsg, setReceiveMsg] = useState();

  // Message User & Content
  const [message, setMessage] = useState('');

  const inputMessage = (e) => {
    setMessage(e.target.value);
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      console.log('----- 메시지 전송 성공! -----');
    }
  };

  ChattingServiceKit.onConnect('/topic/greetings', {}, (newMessage) => {
    setReceiveMsg(newMessage.content);
  });

  useEffect(() => {
    setChatLog([...chatLog, receiveMsg]);
  }, [receiveMsg]);

  const submitHandler = (e) => {
    e.preventDefault();
    ChattingServiceKit.sendMessage({
      content: message,
      accesstoken: accessToken,
    });
    setMessage('');
  };

  useEffect(() => {
    return () => {
      ChattingServiceKit.onDisconnect();
    };
  }, []);

  return (
    <ChatContainer>
      <StChatBoxContainer>
        {chatLog !== 0 &&
          chatLog.map((val, index) => {
            return <h4 key={index}>{val}</h4>;
          })}
        {message.length > 0 ? (
          <StUpLoading>메시지 발신 중...</StUpLoading>
        ) : (
          <StDownLoading>메시지 수신 중...</StDownLoading>
        )}
      </StChatBoxContainer>
      <form onSubmit={submitHandler}>
        <StChatInput
          name='chat'
          autoComplete='off'
          placeholder='>'
          type='text'
          onKeyDown={onEnter}
          value={message}
          onChange={inputMessage}
        />
      </form>
    </ChatContainer>
  );
};
