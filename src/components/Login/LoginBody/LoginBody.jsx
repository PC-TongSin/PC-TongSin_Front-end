import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import LoginInput from '../LoginInput/LoginInput';
import * as L from './LoginBody.style';
import { __loginUser } from '../../../redux/modules/Slice/loginSlice';
import { useDispatch } from 'react-redux';
import { is_password, is_username } from '../../../common/logics';
import {
  __getNickname,
  __getUsername,
} from '../../../redux/modules/Slice/userSlice';

const LoginBody = ({}) => {
  const token = localStorage.getItem('accessToken');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const init = {
    username: '',
    password: '',
  };

  const [input, setInput] = useState(init);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!is_username(input.username) && !is_password(input.password)) {
      window.confirm('닉네임이 이상합니다! ');
    } else if (!is_username(input.username) && is_password(input.password)) {
      window.confirm('닉네임이 이상합니다! ');
    } else if (is_username(input.username) && !is_password(input.password)) {
      window.confirm('비번이 이상합니다!');
    } else {
      try {
        const response = await dispatch(__loginUser(input));

        // 임시방편
        if (response.meta.requestStatus === 'fulfilled') {
          console.log('성공');
          window.confirm(`로그인 성공!`);
          dispatch(__getNickname(token));
          dispatch(__getUsername(token));
          navigate(`/login`);
        } else {
          window.confirm(`${response.payload.response.data.errorMessage}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (token) {
    return <Navigate to='/board' replace={true} />;
  }

  return (
    <>
      <L.Section>
        <L.Header>
          <L.HeaderText>로그인</L.HeaderText>
          <L.Button className='is-sqaure' onClick={() => navigate('/')}>
            X
          </L.Button>
        </L.Header>
        <hr />
        <form onSubmit={handleSubmit}>
          <LoginInput
            id='아이디'
            repeteCheck={false}
            name='username'
            value={input.username}
            onChangeHandler={onChangeHandler}
          />

          <LoginInput
            id='비밀번호'
            repeteCheck={false}
            name='password'
            value={input.password}
            onChangeHandler={onChangeHandler}
          />

          <L.ButtonDiv>
            <L.Button
              onClick={(e) => {
                e.preventDefault();
                navigate('/sign');
              }}
            >
              회원가입
            </L.Button>
            <hr />
            <L.Button type='submit'>로그인</L.Button>
          </L.ButtonDiv>
        </form>
        <hr />
      </L.Section>
    </>
  );
};
export default LoginBody;
