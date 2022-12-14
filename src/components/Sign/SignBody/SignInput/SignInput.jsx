import axios from 'axios';
import React, { useState } from 'react';
import { is_username } from '../../../../common/logics';
import * as I from './SignInput.style';

const SignInput = ({
  id = '아이디',
  repeteCheck = false,
  onChangeHandler,
  input,
  name,
  alertMessage,
  repeatCheckUrl,
}) => {
  const [alertToggle, setAlertToggle] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');
  const [textColorToggle, setTextColorToggle] = useState(false);
  const handleRepeat = async (e) => {
    e.preventDefault();
    if (name === 'username') {
      if (!is_username(input.username)) {
        setAlertToggle(true);
        setTextColorToggle(false);
        setAlertMsg(alertMessage);
      } else {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}${repeatCheckUrl}?username=${input.username}`,
          {
            [name]: input[name],
          }
        );
        if (!response.data.success) {
          //아이디가 중복임 실패함
          setAlertToggle(true);
          setTextColorToggle(false);
          setAlertMsg(response.data.data);
        } else {
          //아이디가 중복이아님 성공함
          setAlertToggle(true);
          setTextColorToggle(true);
          setAlertMsg(response.data.data);
        }
      }
    } else if (name === 'nickname') {
      if (input[name]) {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER}${repeatCheckUrl}?nickname=${input.nickname}`,
          {
            [name]: input[name],
          }
        );

        if (response.request.status !== 200) {
          setAlertToggle(true);
          setTextColorToggle(false);
          setAlertMsg(response.data.error.msg);
        } else {
          setAlertToggle(true);
          setTextColorToggle(true);
          setAlertMsg(response.data.data);
        }
      }
    }
  };

  return (
    <>
      <I.BigDiv>
        <I.Div>
          <I.SmallDiv>
            <I.Span>
              {id} {`>`}
            </I.Span>
          </I.SmallDiv>

          <I.Input
            name={name}
            value={input[name]}
            autoComplete='off'
            onChange={(e) => {
              onChangeHandler(e);
            }}
          />

          {repeteCheck ? (
            <I.CheckButton onClick={handleRepeat}>
              중복체크
              {/* {textColorToggle ? 'checked\n(다시 체크하기)' : '중복체크'} */}
            </I.CheckButton>
          ) : (
            <I.FakeCheckButton></I.FakeCheckButton>
          )}
        </I.Div>
        <I.MsgDiv>
          <I.RepeatCheck
            textColorToggle={textColorToggle}
            repeatToggle={alertToggle}
          >
            {alertMsg}
          </I.RepeatCheck>
        </I.MsgDiv>
      </I.BigDiv>
    </>
  );
};

export default SignInput;
