import React from 'react';
import * as T from './UploadTextareaBox.style';

const UploadTextareaBox = ({}) => {
  return (
    <>
      <T.BigDiv>
        <T.Div>
          <T.SmallDiv>
            <T.Span>제목 {`>`}</T.Span>
          </T.SmallDiv>

          <T.Textarea />
        </T.Div>
      </T.BigDiv>
    </>
  );
};
export default UploadTextareaBox;
