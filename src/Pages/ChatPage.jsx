import styled from 'styled-components';
import { ChatRoom } from '../components/Chat/ChatRoom/ChatRoom';

const ChatPage = () => {

  return (
    <>
      <Test>
        <p>
          ATDT01004...<br/>
          Finding Host chat.talkplaylove.com <br/>
          Typing chat.talkplaylove.com(211.41.99.23).. <br/>
        </p>
      </Test>
      <ChatRoom/>
    </>
  );
};
export default ChatPage;

const Test = styled.div`
  position: fixed;
  background: transparent;
  width: 100%;
  height: fit-content;
  z-index: 2;
  & p {
    margin-left: 0.5rem;
  }
  & button {
    font-family: 'Neo둥근모 Code';
    padding: 1rem;
    font-size: 1rem;
  }
`
