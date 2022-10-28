import React, { useState } from 'react';
import styled from 'styled-components';
import * as U from './Upload.style';
import UploadBox from './UploadBox/UploadBox';
import UploadInputBox from './UploadInputBox/UploadInputBox';
import UploadTextareaBox from './UploadTextareaBox/UploadTextareaBox';
import UploadTextBox from './UploadTextBox/UploadTextBox';

const Upload = ({}) => {
  const [input, setInput] = useState({
    title: '',
    content: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setInput({
      title: '',
      content: '',
    });
  };

  return (
    <>
      <U.Section>
        <form onSubmit={handleSubmit}>
          <U.TitleDiv>
            <U.TitleSpan>글 작성</U.TitleSpan>
          </U.TitleDiv>

          <U.ThinDiv>
            <U.ThinDiv2>
              <UploadBox title='작성자'>
                <Span2>조재신</Span2>
              </UploadBox>
              <UploadBox title='닉네임'>
                <Span2>털보코딩</Span2>
              </UploadBox>
              <UploadBox>
                <BoxInput
                  value={input.title}
                  name='title'
                  onChange={handleChange}
                />
              </UploadBox>
              {/* <UploadBox>
            <BoxTextArea />
          </UploadBox> */}
              <UploadTextareaBox
                content={input.content}
                handleChange={handleChange}
              />
            </U.ThinDiv2>
            <ButtonDiv>
              <ButtonCancel onClick={handleCancel}>취소</ButtonCancel>
              <ButtonSubmit>게시물 등록</ButtonSubmit>
            </ButtonDiv>
          </U.ThinDiv>
        </form>
      </U.Section>
    </>
  );
};
export default Upload;

const BoxInput = styled.input`
  flex: 2.5;
  line-height: 1.6rem;
  outline: none;
  color: ${(props) => props.theme.WHITE};
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
  font-size: 1.2rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.WHITE};
`;

const Span2 = styled.span`
  flex: 2.5;
  line-height: 1.6rem;
  outline: none;
  color: ${(props) => props.theme.WHITE};
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
  font-size: 1.2rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.WHITE};
`;

const BoxTextArea = styled.textarea`
  flex: 2.5;
  line-height: 1.6rem;
  outline: none;
  /* color: ${(props) => props.theme.WHITE}; */
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
  font-size: 1.2rem;
  background-color: white;
  border: none;
  resize: none;
  border-bottom: 2px solid ${(props) => props.theme.WHITE};

  height: 10rem;

  &:hover {
    outline: none;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonCancel = styled.button`
  background-color: ${(props) => props.theme.GREY};
  width: 6rem;
  height: 4rem;
  font-size: 2rem;
  color: ${(props) => props.theme.BLACK};
  font-family: 'Neo둥근모 Code';
  margin-left: 1rem;
`;

const ButtonSubmit = styled.button`
  background-color: transparent;
  width: 14rem;
  height: 6rem;
  font-size: 2rem;
  font-family: 'Neo둥근모 Code';
  color: ${(props) => props.theme.WHITE};
  border: 1px solid ${(props) => props.theme.WHITE};
`;
