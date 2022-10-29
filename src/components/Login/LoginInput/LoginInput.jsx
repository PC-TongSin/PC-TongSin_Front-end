import React from 'react';
import * as L from './LoginInput.style';

const LoginInput = ({
  id = '아이디',
  repeteCheck = false,
  onChangeHandler,
  value,
  name,
}) => {
  const handleRepeat = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <L.BigDiv>
        <L.Div>
          <L.SmallDiv>
            <L.Span>
              {id} {`>`}
            </L.Span>
          </L.SmallDiv>

          <L.Input
            name={name}
            type='text'
            value={value}
            onChange={onChangeHandler}
          />

          {repeteCheck ? (
            <L.CheckButton onClick={handleRepeat}>중복체크</L.CheckButton>
          ) : (
            <L.FakeCheckButton></L.FakeCheckButton>
          )}
        </L.Div>
        <L.InputSpan>아이디는 n~m 글자입니다.</L.InputSpan>
      </L.BigDiv>
    </>
  );
};
export default LoginInput;
