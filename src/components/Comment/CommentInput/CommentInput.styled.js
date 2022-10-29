import styled from "styled-components";

export const StCommentInputContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 30rem;
`

export const StCommentInput = styled.input`
  width: 40rem;
  margin: 0 auto;
  margin-top: 2rem;
  padding: 1rem;
  margin-bottom: 2rem;
  background: transparent;
  outline: none;
  border: none;
  font-family: "Neo둥근모 Code", "Neo둥근모Code", "neodgm-code";
  color: ${(props) => props.theme.WHITE};
  border-bottom: 1px solid ${(props) => props.theme.WHITE};
`

export const StCommentBtn = styled.p`
  display: flex;
  width: 5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${(props) => props.theme.GREY};
    color: ${(props) => props.theme.BLACK};
  }
`