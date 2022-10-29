import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginInput from '../LoginInput/LoginInput';
import * as L from './LoginBody.style';
import { __loginUser } from "../../../redux/modules/Slice/loginSlice"
import { useDispatch } from 'react-redux';

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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(__loginUser(input));
  };

  return (
    <>
      <L.Section>
        <form onSubmit={handleSubmit}>
          <LoginInput
            id='아이디'
            repeteCheck={true}
            name='username'
            value={input.username}
            onChangeHandler={onChangeHandler}
          />

          <LoginInput
            id='비밀번호'
            repeteCheck={true}
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
