import { ChatListContainer, ChatItemSmall, ChatItemMedium, ChatItemLarge } from "./\bChatList.styled";

export const ChatList = () => {
  return (
    <ChatListContainer>
      <thead>
        <tr>
          <th>번호</th>
          <th>작성자</th>
          <th>닉네임</th>
          <th>날 짜</th>
          <th>사람 수</th>
          <th>제 목</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <ChatItemSmall>1</ChatItemSmall>
          <ChatItemSmall>김성호</ChatItemSmall>
          <ChatItemSmall>zㅣ존성호</ChatItemSmall>
          <ChatItemMedium>2022-11-1</ChatItemMedium>
          <ChatItemSmall>[1/2]</ChatItemSmall>
          <ChatItemLarge>일산 벙개 할사람 ^0^</ChatItemLarge>
        </tr>
        <tr>
          <ChatItemSmall>2</ChatItemSmall>
          <ChatItemSmall>장지윤</ChatItemSmall>
          <ChatItemSmall>핑크겅듀</ChatItemSmall>
          <ChatItemMedium>2022-11-1</ChatItemMedium>
          <ChatItemSmall>[1/2]</ChatItemSmall>
          <ChatItemLarge>내가 만든 쿠키 너를 구웠지</ChatItemLarge>
        </tr>
        <tr>
          <ChatItemSmall>3</ChatItemSmall>
          <ChatItemSmall>김성호</ChatItemSmall>
          <ChatItemSmall>zㅣ존성호</ChatItemSmall>
          <ChatItemMedium>2022-11-1</ChatItemMedium>
          <ChatItemSmall>[1/2]</ChatItemSmall>
          <ChatItemLarge>사람을 구워?</ChatItemLarge>
        </tr>
      </tbody>
    </ChatListContainer>
  )
};