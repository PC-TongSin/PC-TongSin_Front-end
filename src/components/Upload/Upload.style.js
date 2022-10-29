import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
`;

export const TitleDiv = styled.div`
  background-color: ${(props) => props.theme.GREY};

  width: 14rem;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
`;

export const TitleSpan = styled.span`
  font-size: 2.6rem;

  color: ${(props) => props.theme.DEEP_BLUE};
`;

export const ThinDiv = styled.div`
  position: absolute;
  top: 3rem;
  width: 100%;
  z-index: -1;
  border: 1px solid ${(props) => props.theme.WHITE};
  min-height: 10rem;
  /* padding: 0 2rem; */
  padding-top: 5rem;
`;

export const ThinDiv2 = styled.div`
  padding: 0 2rem;
`;
