import React from 'react';

import { useHistory, useNavigate } from 'react-router-dom';

const ChatPage = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      <div>아직 안 만듬</div>

      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
    </>
  );
};
export default ChatPage;
