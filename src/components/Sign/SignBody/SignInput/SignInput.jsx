import React from 'react';
import * as I from './SignInput.style';

const SignInput = ({ 
    id = '아이디', 
    repeteCheck = false,
    onChangeHandler,
    value,
    name
  }) => {
  return (
    <>
      <I.BigDiv>
        <I.Div>
          <I.SmallDiv>
            <I.Span>{id} {`>`}</I.Span>
          </I.SmallDiv>

          <I.Input name={name} value={value} onChange={onChangeHandler}/>

          {repeteCheck ? (
            <I.CheckButton>중복체크</I.CheckButton>
          ) : (
            <I.FakeCheckButton></I.FakeCheckButton>
          )}
        </I.Div>
        <I.InputSpan>아이디는 n~m 글자입니다.</I.InputSpan>
      </I.BigDiv>
    </>
  );
};
export default SignInput;
