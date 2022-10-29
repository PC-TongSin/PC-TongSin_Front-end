import { Comments } from "./CommentList.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getBoardId } from "../../../redux/modules/Slice/boardSlice";
import { useParams } from "react-router-dom";

export const CommentList = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();

  const commentList = useSelector((state) => state.boards.board.commentList);
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
              <p>{ item.id }</p><p>{ item.content }</p><p>{ item.author }</p><p>X</p>
            </Comments>
          )
        })
      }
    </div>

  )
};
