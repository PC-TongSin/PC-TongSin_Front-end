import styled from 'styled-components';

export const Section = styled.section`
  /* height: 10rem; */
  width: 100%;
  position: relative;
  padding: 4.5rem;
  display: flex;
  min-width: 50rem;
  flex-direction: column;
  justify-content: center;
  /* background-color: ${(props) => props.theme.GREY}; */
  border: 2px solid ${(props) => props.theme.WHITE};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 7rem;
  height: 3rem;
  font-size: 1.4rem;
  font-family: 'Neo둥근모 Code';
  margin: 0 auto;
  background-color: ${(props) => props.theme.GREY};
`;
