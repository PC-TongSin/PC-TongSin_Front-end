import React from 'react';
import * as I from './UploadInputBox.style';

const UploadInputBox = ({}) => {
  return (
    <>
      <I.BigDiv>
        <I.Div>
          <I.SmallDiv>
            <I.Span>제목 {`>`}</I.Span>
          </I.SmallDiv>

          <I.Input />
        </I.Div>
      </I.BigDiv>
    </>
  );
};
export default UploadInputBox;
