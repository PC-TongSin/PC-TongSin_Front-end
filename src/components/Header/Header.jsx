import React from 'react';
import * as H from './Header.style';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Header = ({}) => {
  const navigate = useNavigate();

  const isLogin = localStorage.getItem('accessToken');

  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
    localStorage.removeItem('refreshToken');
    window.location.reload();
  };

  return (
    <>
      <H.HeaderSection>
        <H.HeaderButton
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </H.HeaderButton>
        <H.HeaderButton
          onClick={() => {
            navigate('/board');
          }}
        >
          Board
        </H.HeaderButton>
        <H.HeaderButton
          onClick={() => {
            navigate('/chat');
          }}
        >
          Chat
        </H.HeaderButton>
        {isLogin ? (
          <H.HeaderButton onClick={handleLogOut}>Logout</H.HeaderButton>
        ) : (
          <H.HeaderButton
            onClick={() => {
              navigate('/login');
            }}
          >
            Login
          </H.HeaderButton>
        )}
      </H.HeaderSection>
    </>
  );
};
export default Header;
