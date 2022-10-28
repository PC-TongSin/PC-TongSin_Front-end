import React from 'react';
import * as H from './Header.style';

const Header = ({}) => {
  return (
    <>
      <H.HeaderSection>
        <H.HeaderButton>Home</H.HeaderButton>
        <H.HeaderButton>Board</H.HeaderButton>
        <H.HeaderButton>Chat</H.HeaderButton>
        <H.HeaderButton>Login</H.HeaderButton>
      </H.HeaderSection>
    </>
  );
};
export default Header;
