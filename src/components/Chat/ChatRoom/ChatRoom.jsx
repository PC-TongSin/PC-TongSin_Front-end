import {
  ChatContainer,
  StUpLoading,
  StDownLoading,
  StChatInput,
  StChatBoxContainer,
  StChatBox,
  ChatTime,
  ChatMsg,
} from './ChatRoom.styled';
import { useEffect, useState } from 'react';
import { ChattingServiceKit } from '../../../SockJS/SockInstance';

export const ChatRoom = () => {
  const accessToken = localStorage.getItem('accessToken');
  // console.log(accessToken);

  const [chatLog, setChatLog] = useState([]);

  const [receiveMsg, setReceiveMsg] = useState();

  // Message User & Content
  const [message, setMessage] = useState('');
  const inputMessage = (e) => {
    setMessage(e.target.value);
  };

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      // sendMessage();
      console.log('----- 메시지 전송 성공! -----');
    }
  };

  ChattingServiceKit.onConnect('/topic/greetings', {}, (newMessage) => {
    // setMessage(newMessage.content);

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

  // console.log(chatLog);
  console.log(message);

  return (
    <ChatContainer>
      <StChatBoxContainer>
        {chatLog !== 0 &&
          chatLog.map((val, index) => {
            return <h3 key={index}>{val}</h3>;
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
        <button>전송하기</button>
      </form>
    </ChatContainer>
  );
};
