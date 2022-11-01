import { ChatList } from "../components/Chat/ChatList/ChatList"
import Header from "../components/Header/Header"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const ChatListPage = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <UploadBtn onClick={() => {
        navigate("/chat")
      }}>
        채팅방 개설
      </UploadBtn>
      <ChatList/>
    </div>
  )
};

const UploadBtn = styled.button`
  background: transparent;
  width: 15rem;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  font-size: 2rem;
  font-family: 'Neo둥근모 Code';
  color: ${(props) => props.theme.WHITE};
  border: 1px solid ${(props) => props.theme.WHITE};
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.theme.BLACK};
    border: 1px solid ${(props) => props.theme.WHITE};
    background: ${(props) => props.theme.GREY};
  }
`