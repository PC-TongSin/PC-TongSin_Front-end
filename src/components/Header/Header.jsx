import React from 'react';
import * as H from './Header.style';
import { useNavigate } from 'react-router-dom';

const Header = ({}) => {

  const navigate = useNavigate();

  return (
    <>
      <H.HeaderSection>
        <H.HeaderButton onClick={() => {
          navigate("/")
        }} >Home</H.HeaderButton>
        <H.HeaderButton onClick={() => {
          navigate("/board")
        }}>Board</H.HeaderButton>
        <H.HeaderButton onClick={() => {
          navigate("/chat")
        }}>Chat</H.HeaderButton>
        <H.HeaderButton onClick={() => {
          navigate("/sign")
        }}>Sign</H.HeaderButton>
      </H.HeaderSection>
    </>
  );
};
export default Header;
