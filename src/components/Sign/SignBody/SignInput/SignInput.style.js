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
  color: ${(props) => props.theme.BLACK};
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
  font-size: 1.2rem;
  background: transparent;
  /* border: none; */
  border-bottom: 2px solid ${(props) => props.theme.WHITE};
`;

export const CheckButton = styled.button`
  font-size: 1rem;
  flex: 1;
  font-family: 'Neo둥근모 Code';
  cursor: pointer;
  box-sizing: border-box;
  background-color: rgb(206, 208, 207);
  color: rgb(5, 6, 8);
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-left-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-right-color: rgb(5, 6, 8);
  border-bottom-color: rgb(5, 6, 8);
  box-shadow: rgb(223, 224, 227) 1px 1px 0px 1px inset,
    rgb(136, 140, 143) -1px -1px 0px 1px inset;
  height: 35px;
  width: 70%;
  border-style: solid;
  border-width: 2px;
`;
export const FakeCheckButton = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.BLACK};
`;

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
  text-align: center;
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
