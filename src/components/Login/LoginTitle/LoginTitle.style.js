import styled from 'styled-components';

export const LoginTitleSection = styled.section`
  height: 16rem;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.GREY};

  margin-bottom: 1rem;
`;

export const LoginTitleH1 = styled.h1`
  margin: auto;
  font-size: 4rem;

  color: ${(props) => {
    console.log(props.theme);
  }};
`
