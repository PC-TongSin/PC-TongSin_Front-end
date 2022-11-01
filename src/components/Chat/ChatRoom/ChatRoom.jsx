import { ChatContainer, StUpLoading, StDownLoading, StChatInput, StChatBoxContainer, StChatBox, ChatTime, ChatMsg } from "./ChatRoom.styled";
import styled from "styled-components";
import { useRef, useState } from "react";

export const ChatRoom = () => {

  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleFocus = (e) => {
    setIsInputFocused(e.target.value)
  }

  return (
    <ChatContainer>

      <StChatBoxContainer>

        <StChatBox>
          <ChatTime>[2022-11-1] 핑크겅듀)</ChatTime><ChatMsg>님 자신 있음?</ChatMsg>
        </StChatBox>
        <StChatBox>
          <ChatTime>[2022-11-1] 핑크지엉)</ChatTime><ChatMsg>내가 수지구의 짱이다</ChatMsg>
        </StChatBox>
        <StChatBox>
          <ChatTime>[2022-11-1] 천사지윤)</ChatTime><ChatMsg>나는 기흥의 짱이다</ChatMsg>
        </StChatBox>

        {
          isInputFocused.length > 0 ? <StUpLoading>메시지 발신 중...</StUpLoading> : <StDownLoading>메시지 수신 중...</StDownLoading>
        }
        
      </StChatBoxContainer>


      <StChatInput 
        placeholder=">"
        onChange={handleFocus}
      />
    </ChatContainer>
  )
};