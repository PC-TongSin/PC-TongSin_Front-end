import React from 'react';
import * as B from './SignBody.style';
import SignInput from './SignInput/SignInput';

import { __postUser } from '../../../redux/modules/Slice/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { is_password, is_username } from '../../../common/logics';

const SignBody = ({}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

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

  const onSubmitHandlers = async (e) => {
    e.preventDefault();

    if (input.password === input.passwordConfirm) {
      if (!is_username(input.username) && !is_password(input.password)) {
        // 아이디가 잘못됨
        window.confirm(
          '닉네임이 이상합니다!  닉네임은 최소 4자 이상, 12자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다.'
        );
      } else if (!is_username(input.username) && is_password(input.password)) {
        // 아이디가 잘못됨
        window.confirm(
          '닉네임이 이상합니다!  닉네임은 최소 4자 이상, 12자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다'
        );
      } else if (is_username(input.username) && !is_password(input.password)) {
        //패스워드가 잘못됨
        window.confirm(
          '비번이 이상합니다!  비밀번호는 최소 8자 이상, 20자 이하 알파벳 대소문자, 숫자(0-9), 특수문자로 구성됩니다.'
        );
      } else {
        // ok 통과

        const response = await dispatch(__postUser(input));

        if (response.meta.requestStatus === 'fulfilled') {
          // console.log('회원가입 성공');
          window.confirm(`회원가입 성공`);
          // navigate(`/`);
        } else {
          window.confirm(`${response.payload.response.data.errorMessage}`);
        }
      }
    } else {
      window.confirm('비밀번호가 서로 다릅니다!');
    }
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
            input={input}
            onChangeHandler={onChangeHandler}
            alertMessage='아이디가 이상합니다! 아이디는 최소 4자 이상, 12자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다.'
            repeatCheckUrl='/api/auth/checkid'
          />
          <SignInput
            id='닉네임'
            repeteCheck={true}
            type='text'
            name='nickname'
            input={input}
            onChangeHandler={onChangeHandler}
            // alertMessage=''
            repeatCheckUrl='/api/auth/checknickname'
          />
          <SignInput
            id='비밀번호'
            repeteCheck={false}
            type='password'
            name='password'
            input={input}
            onChangeHandler={onChangeHandler}
          />
          <SignInput
            id='비밀번호확인'
            repeteCheck={false}
            type='password'
            name='passwordConfirm'
            input={input}
            alertMessage=''
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
