import styled from "styled-components";

export const DetailMiscContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: 0 auto;
`;

export const Like = styled.p`
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
  background: transparent;
  margin-right: 1rem;
  transition: all 0.3s;
  /* padding: 0.3rem; */
  &:hover {
    background: ${(state) => state.theme.GREY};
    color: ${(state) => state.theme.BLACK};
  }
`;
