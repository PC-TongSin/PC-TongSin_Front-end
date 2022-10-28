import React from 'react';
import * as B from './SignBody.style';
import SignInput from './SignInput/SignInput';

import { useDispatch } from "react-redux";
import { useState } from 'react';

const SignBody = ({}) => {

  const dispatch = useDispatch();

  const [input, setInput] = useState();

  return (
    <>
      <B.Section>
        <SignInput id='아이디' repeteCheck={true} />
        <SignInput id='닉네임' repeteCheck={true} />
        <SignInput id='비번' repeteCheck={false} />
        <SignInput id='비번2' repeteCheck={false} />

        <B.Button>회원가입</B.Button>
      </B.Section>
    </>
  );
};
export default SignBody;
