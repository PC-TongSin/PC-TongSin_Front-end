import React from 'react';
import * as T from './UploadTextareaBox.style';

const UploadTextareaBox = ({ content, handleChange }) => {
  return (
    <>
      <T.BigDiv>
        <T.Div>
          <T.SmallDiv>
            <T.Span>내용 {`>`}</T.Span>
          </T.SmallDiv>

          <T.Textarea name='content' value={content} onChange={handleChange} />
        </T.Div>
      </T.BigDiv>
    </>
  );
};
export default UploadTextareaBox;
