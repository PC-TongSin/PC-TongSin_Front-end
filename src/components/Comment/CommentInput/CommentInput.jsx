import { __addComment } from "../../../redux/modules/Slice/commentSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { StCommentInputContainer, StCommentInput, StCommentBtn } from "./CommentInput.styled";

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
    <StCommentInputContainer>
      <StCommentInput
        onChange={commentChangeHandler}
        placeholder="댓글을 달아보세요"
        maxLength="30"
      />
      <StCommentBtn
        onClick={() => {
          dispatch(__addComment({ board_id, content }))
        }}
      >댓글 달기</StCommentBtn>
    </StCommentInputContainer>  

  )
};