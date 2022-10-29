import styled from 'styled-components';

export const BigDiv = styled.div`
  position: relative;
`;

export const Div = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  min-width: 15rem;
`;

export const Span = styled.span`
  font-size: 1.2rem;
`;

export const SmallDiv = styled.div`
  flex: 1;
  min-width: 15rem;
`;

export const Input = styled.input`
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

export const CheckButton = styled.button`
  font-size: 1.2rem;
  flex: 1;
  font-family: 'Neo둥근모 Code';
  background-color: ${(props) => props.theme.GREY};
  padding: 0;
  min-width: 4rem;
  height: 2.4rem;
`;
export const FakeCheckButton = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.GREY};
`;
// export const FakeCheckButtonSpan = styled.span`
//   font-size: 2rem;

//   background-color: ${(props) => props.theme.GREY};
// `;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MsgDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RepeatCheck = styled.span`
  position: relative;
  left: 14%;
  ${({ repeatToggle }) => {
    if (repeatToggle) {
      return 'margin: 1rem 2rem; ';
    } else {
      return 'inline-block';
    }
  }};

  color: ${(props) => {
    if (props.textColorToggle) {
      return props.theme.WHITE;
    } else {
      return props.theme.RED;
    }
  }};
  display: ${({ repeatToggle }) => {
    if (repeatToggle) {
      return 'inline-block';
    } else {
      return 'none';
    }
  }};
`;
