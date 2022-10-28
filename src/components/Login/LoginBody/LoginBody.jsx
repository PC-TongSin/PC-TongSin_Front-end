import React from 'react';
import * as B from './LoginBody.style';
import LoginInput from './LoginInput/LoginInput';

const LoginBody = ({}) => {
  return (
    <>
      <B.Section>
        <LoginInput id='아이디' repeteCheck={true} />
        <LoginInput id='닉네임' repeteCheck={true} />
        <LoginInput id='비번' repeteCheck={false} />
        <LoginInput id='비번2' repeteCheck={false} />

        <B.Button>회원가입</B.Button>
      </B.Section>
    </>
  );
};
export default LoginBody;
