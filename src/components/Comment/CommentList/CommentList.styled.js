import styled from "styled-components"

export const Comments = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
  border-bottom: 1px solid ${(props) => props.theme.WHITE};
`

export const StCommentContent = styled.p`
  width: 15rem;
  max-width: 15rem;
`;

export const StComment = styled.p`
  display: flex;
  align-items: center;
`;

export const StCommentDelBtn = styled.p`
  border: none;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${(props) => props.theme.GREY};
    color: ${(props) => props.theme.BLACK};
  }
`;