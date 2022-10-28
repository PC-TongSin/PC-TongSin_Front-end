import styled from 'styled-components';

export const BigDiv = styled.div`
  position: relative;
  /* border: 1px solid white; */
  margin: 2rem 0;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
`;

export const Span = styled.span`
  font-size: 1.5rem;
`;

export const SmallDiv = styled.div`
  flex: 1;
`;

export const Textarea = styled.textarea`
  flex: 2.5;
  line-height: 1.6rem;
  outline: none;
  color: ${(props) => props.theme.WHITE};
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
  font-size: 1.2rem;
  background-color: transparent;
  border: none;
  resize: none;
  border-bottom: 2px solid ${(props) => props.theme.WHITE};

  min-height: 10rem;

  &:hover {
    outline: none;
  }
`;
