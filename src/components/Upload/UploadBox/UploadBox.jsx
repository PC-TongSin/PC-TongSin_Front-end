import React from 'react';
import * as B from './UploadBox.style';

const UploadBox = ({ children }) => {
  return (
    <>
      <B.BigDiv>
        <B.Div>
          <B.SmallDiv>
            <B.Span>제목 {`>`}</B.Span>
          </B.SmallDiv>

          {/* <B.Input /> */}

          {children}
        </B.Div>
      </B.BigDiv>
    </>
  );
};
export default UploadBox;
