import styled from "styled-components";
import { __addComment } from "../../../redux/modules/Slice/commentSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const CommentInput = () => {

  const { id } = useParams();
  const board_id = id
  const dispatch = useDispatch();

  const [content, setComment] = useState("");
  const commentChangeHandler = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  // console.log(comment)

  return (
    <div>
      <StCommnetInput
        onChange={commentChangeHandler}
      />
      <button
        onClick={() => {
          dispatch(__addComment({ board_id, content }))
        }}
      >댓글 달기</button>
    </div>  

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