import React from 'react';
import * as B from './SignBody.style';
import SignInput from './SignInput/SignInput';
import { __postUser } from '../../../redux/modules/Slice/userSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { is_password, is_username } from '../../../common/logics';
import styled from 'styled-components';

const SignBody = () => {
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
          window.confirm(`회원가입 성공`);
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
        <B.Header>
          <B.HeaderText>회원가입</B.HeaderText>
          <B.Button 
            className='is-sqaure'
            onClick={() => navigate("/login")}
          >X</B.Button>
        </B.Header>

        <form onSubmit={onSubmitHandlers}>
          <hr/>
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
          <GuideMsg>아이디는 4 ~ 12자, 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 작성해주세요^0^</GuideMsg>
          <SignInput
            id='닉네임'
            repeteCheck={true}
            type='text'
            name='nickname'
            input={input}
            onChangeHandler={onChangeHandler}
            repeatCheckUrl='/api/auth/checknickname'
          />
          <GuideMsg/>
          <SignInput
            id='비밀번호'
            repeteCheck={false}
            type='password'
            name='password'
            input={input}
            onChangeHandler={onChangeHandler}
          />
          <GuideMsg>비밀번호는 8 ~ 20자, 알파벳 대소문자, 숫자(0-9), 특수문자로 작성해주세요.^0^</GuideMsg>
          <SignInput
            id='비밀번호확인'
            repeteCheck={false}
            type='password'
            name='passwordConfirm'
            input={input}
            onChangeHandler={onChangeHandler}
          />
          <GuideMsg/>
          <hr/>
          <B.Button>회원가입</B.Button>
        </form>
      </B.Section>
    </>
  );
};

export default SignBody;

export const GuideMsg = styled.p`
  color: tomato;
  margin: 0;
  padding: 0;
  margin-left: 15rem;
  font-size: 0.7rem;
`