import React from 'react';
import * as B from './SignBody.style';
import SignInput from './SignInput/SignInput';

import { __postUser } from '../../../redux/modules/Slice/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignBody = ({}) => {
  const dispatch = useDispatch();

  const init = {
    username: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
  };

  const [input, setInput] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  
  const onSubmitHandlers = (e) => {
    e.preventDefault();
    dispatch(__postUser(input));
  };

  return (
    <>
      <B.Section>
        <form onSubmit={onSubmitHandlers}>
          <SignInput
            id='아이디'
            repeteCheck={true}
            type='text'
            name='username'
            value={input.username}
            onChangeHandler={onChangeHandler}
          />
          <SignInput
            id='닉네임'
            repeteCheck={true}
            type='text'
            name='nickname'
            value={input.nickname}
            onChangeHandler={onChangeHandler}
          />
          <SignInput
            id='비밀번호'
            repeteCheck={false}
            type='password'
            name='password'
            value={input.password}
            onChangeHandler={onChangeHandler}
          />
          <SignInput
            id='비밀번호확인'
            repeteCheck={false}
            type='password'
            name='passwordConfirm'
            value={input.passwordConfirm}
            onChangeHandler={onChangeHandler}
          />
          <B.Button>회원가입</B.Button>
        </form>
        <Link to='/login'>로그인하기</Link>
      </B.Section>
    </>
  );
};

export default SignBody;