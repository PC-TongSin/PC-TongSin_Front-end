import { ChatContainer, StUpLoading, StDownLoading, StChatInput, StChatBoxContainer, StChatBox, ChatTime, ChatMsg } from "./ChatRoom.styled";
import { useEffect, useState } from "react";
import * as SockJS from "sockjs-client";

export const ChatRoom = () => {

  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  // console.log(hour, minute)

  // Message User & Content
  const [message, setMessage] = useState('');
  // Received Chat
  const [chat, setChat] = useState([]);

  const [sockjs, setSockjs] = useState();
  const [receivedData, setReceiveData] = useState('');

  useEffect(() => {
    console.log(chat)
  }, [chat]);

  useEffect(() => {
    if (receivedData === '') return;
    setChat([...chat, { name : "Server", message: receivedData}])
  }, [receivedData, chat]);

  const onClickConnectBtn = () => {
    const sock = new SockJS("http://localhost:8081");
    sock.onmessage = function (e) {
      setReceiveData(e.data);
      console.log(e.data)
    }
    setSockjs(sock);
    setChat([...chat, { name: "testUser", message: "님이 입장하셨습니다." }])
  };

  const inputMessage = (e) => {
    setMessage(e.target.value);
  }

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
      console.log("----- 메시지 전송 성공! -----")
    };
  };

  const sendMessage = () => {
    if ( message === '' ) return;
    setChat([...chat, { name: "testUser", message: message }]);
    console.log(message);
    // console.log(sockjs);
    // sockjs.send(message);
    setMessage('');
  };


  return (
    
    <ChatContainer>

      {/* {
        live && */}
        <>
          <StChatBoxContainer>
          <button>채팅 나가기</button>
            <StChatBox>
              <ChatTime>[{hour}:{minute}] 핑크겅듀 : </ChatTime><ChatMsg>님 자신 있음?</ChatMsg>
            </StChatBox>
            <StChatBox>
              <ChatTime>[{hour}:{minute}] zㅣ존성호 : </ChatTime><ChatMsg>내가 수지구의 짱이다</ChatMsg>
            </StChatBox>
            <StChatBox>
              <ChatTime>[{hour}:{minute}] 핑크겅듀 : </ChatTime><ChatMsg>내가 만든 쿠키</ChatMsg>
            </StChatBox>
            <StChatBox>
              <ChatTime>[{hour}:{minute}] zㅣ존성호 : </ChatTime><ChatMsg>너를 구웠지</ChatMsg>
            </StChatBox>
            <StChatBox>
              <ChatTime>[{hour}:{minute}] (주)Zz지엉겅듀zZ[TM] : </ChatTime><ChatMsg>크앤 구합니다 (커플링 3만원 이하 ㄲㅈ)</ChatMsg>
            </StChatBox>
            <StChatBox>
              <ChatTime>[{hour}:{minute}] S2성민앙마S2 : </ChatTime><ChatMsg>테런 연금 사주실 분</ChatMsg>
            </StChatBox>
            {
              message.length > 0 ? <StUpLoading>메시지 발신 중...</StUpLoading> : <StDownLoading>메시지 수신 중...</StDownLoading>
            }
          </StChatBoxContainer>
 
        </>
      {/* } */}
      <StChatInput 
        placeholder=">"
        type="text"
        onKeyDown={onEnter}
        value={message}
        onChange={inputMessage}
      />
      <button onClick={sendMessage}>전송하기</button>
    </ChatContainer>
  )
};