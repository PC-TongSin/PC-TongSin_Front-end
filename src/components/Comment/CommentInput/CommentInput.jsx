import styled from "styled-components";

export const CommentInput = () => {
  return (
    <StCommnetInput></StCommnetInput>
  )
};

export const StCommnetInput = styled.input`
  display: flex;
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