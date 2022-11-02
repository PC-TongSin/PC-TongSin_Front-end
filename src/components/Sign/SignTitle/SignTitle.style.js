import styled from 'styled-components';

export const LoginTitleSection = styled.section`
  width: 100%;
  height: 15rem;
  margin: 0 auto;
  max-width: 60rem;
  min-width: 50rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  border: 2px solid ${(props) => props.theme.WHITE};
`;

export const LoginTitleH1 = styled.h1`
  margin: auto;
  font-size: 4rem;
  color: ${(props) => {
    console.log(props.theme);
  }};
  @media screen and (width: 1024px){
    font-size: 3rem;
  }
  @media screen and (width: 768px){
    font-size: 2rem;
  }
`;
