import styled from 'styled-components';

export const Section = styled.section`
  height: 16rem;
  width: 100%;
  min-width: 50rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1rem;
  border: 2px solid ${(props) => props.theme.WHITE};
`;

export const H1 = styled.h1`
  margin: auto;
  font-size: 4rem;

  @media screen and (width: 1024px) {
    font-size: 3rem;
  }
  @media screen and (width: 768px) {
    font-size: 2rem;
  }
`;