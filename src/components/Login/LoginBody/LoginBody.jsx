import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
          dispatch(__getNickname());
          dispatch(__getUsername());
          navigate(`/board`);
        } else {
          window.confirm(`${response.payload.response.data.errorMessage}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <L.Section>
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
              <br />
              하러가기
            </L.Button>
            <L.Button type='submit'>로그인 하기</L.Button>
          </L.ButtonDiv>
        </form>
      </L.Section>
    </>
  );
};
export default LoginBody;
