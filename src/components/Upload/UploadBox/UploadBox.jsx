import React from 'react';
import * as B from './UploadBox.style';

const UploadBox = ({ title = '제목', children }) => {
  return (
    <>
      <B.BigDiv>
        <B.Div>
          <B.SmallDiv>
            <B.Span>
              {title} {`>`}
            </B.Span>
          </B.SmallDiv>

          {/* <B.Input /> */}

          {children}
        </B.Div>
      </B.BigDiv>
    </>
  );
};
export default UploadBox;
