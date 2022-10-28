import styled from 'styled-components';

export const Section = styled.section`
  /* height: 10rem; */
  width: 100%;
  position: relative;
  padding: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: ${(props) => props.theme.GREY}; */
  border: 2px solid ${(props) => props.theme.WHITE};
`;

export const Button = styled.button`
  width: 7rem;
  height: 3rem;
  font-size: 1.4rem;
  font-family: 'Neo둥근모 Code';
  margin: auto;
  background-color: ${(props) => props.theme.GREY};
`;
