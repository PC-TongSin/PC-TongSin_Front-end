import React from 'react';
import styled from 'styled-components';
import * as U from './Upload.style';
import UploadBox from './UploadBox/UploadBox';
import UploadInputBox from './UploadInputBox/UploadInputBox';
import UploadTextareaBox from './UploadTextareaBox/UploadTextareaBox';
import UploadTextBox from './UploadTextBox/UploadTextBox';

const Upload = ({}) => {
  return (
    <>
      <U.Section>
        <U.TitleDiv>
          <U.TitleSpan>글 작성</U.TitleSpan>
        </U.TitleDiv>

        <U.ThinDiv>
          <UploadBox>
            <Span2>조재신</Span2>
          </UploadBox>
          <UploadBox>
            <Span2>털보코딩</Span2>
          </UploadBox>
          <UploadBox>
            <BoxInput />
          </UploadBox>
          {/* <UploadBox>
            <BoxTextArea />
          </UploadBox> */}
          <UploadTextareaBox />
        </U.ThinDiv>
      </U.Section>
    </>
  );
};
export default Upload;

export const BoxInput = styled.input`
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

export const Span2 = styled.span`
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

export const BoxTextArea = styled.textarea`
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
