import styled from 'styled-components';

export const BigDiv = styled.div`
  position: relative;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-width: 15rem;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
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
  background-color: ${(props) => props.theme.GREY};
  padding: 0;
  min-width: 4rem;
`;
export const FakeCheckButton = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.GREY};
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputSpan = styled.span`
  position: relative;
  left: 34%;
  margin: 1rem 0;
  display: inline-block;
  color: ${(props) => props.theme.RED};
  opacity: 0;
`;
