import styled from 'styled-components';

export const HeaderSection = styled.section`
  height: 6rem;
  width: 100%;
  display: flex;
  /* justify-content: ; */
`;

export const HeaderButton = styled.button`
  flex: 1;
  margin: 0 0.8rem;
  height: 3rem;
  font-size: 1.7rem;
  font-family: 'Neo둥근모 Code';
  background: transparent;
  color: white;
  border: 1px solid ${(props) => props.theme.WHITE};
  transition: all 0.3s;
  &:hover {
    background: ${(props) => props.theme.GREY};
    color: ${(props) => props.theme.BLACK};
  }
`;
