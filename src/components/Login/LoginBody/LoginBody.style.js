import styled from 'styled-components';

export const LoginBodySection = styled.section`
  height: 10rem;
  width: 100%;
  position: relative;

  background-color: ${(props) => props.theme.GREY};
`;

export const LoginBodyButton = styled.button`
  width: 7rem;
  height: 3rem;
  font-size: 1rem;
  font-family: 'Neo둥근모 Code';
  background-color: #d9d9d9;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
