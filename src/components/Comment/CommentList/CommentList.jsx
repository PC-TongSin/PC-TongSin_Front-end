import { Comments, StCommentContent, StComment, StCommentDelBtn } from "./CommentList.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getBoardId } from "../../../redux/modules/Slice/boardSlice";
import { useParams } from "react-router-dom";
import { shallowEqual } from "react-redux";
import { __delComment } from "../../../redux/modules/Slice/commentSlice";

export const CommentList = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();

  const commentList = useSelector((state) => (state.boards.board.commentList), shallowEqual);
  console.log(commentList);

  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  return (
    <div>
      {
        commentList?.map((item) => {
          return (
            <Comments key={item.id}>
              <StComment>{ item.id }</StComment>
              <StCommentContent>{ item.content }</StCommentContent>
              <StComment>{ item.author }</StComment>
              <StCommentDelBtn onClick={() => {
                dispatch(__delComment(item.id))
              }}>X</StCommentDelBtn>
            </Comments>
          )
        })
      }
    </div>
  )
};