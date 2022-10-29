import { Comments, StCommentContent, StComment, StCommentDelBtn } from "./CommentList.styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getBoardId } from "../../../redux/modules/Slice/boardSlice";
import { useParams } from "react-router-dom";
import { __delComment, __editComment } from "../../../redux/modules/Slice/commentSlice";
import styled from "styled-components";
import { useState } from "react";

export const CommentList = () => {
  
  const { id } = useParams();
  const dispatch = useDispatch();

  const commentList = useSelector((state) => (state.boards.board.commentList));
  console.log(commentList);

  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState("");
  const commentChangeHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };


  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  return (
    <div>
      {
        commentList?.map((item) => {
          return (
            <Comments key={ item.id }>
              <StComment>{ item.id }</StComment>
              <StCommentContent>
                {
                  isEdit ?
                    <StEditInput 
                      defaultValue={ item.content }
                      onChange={ commentChangeHandler}
                    /> : 
                      <StInput defaultValue={ item.content } disabled/>
                }
              </StCommentContent>
              <StComment>{ item.author }</StComment>
              {
                isEdit ? 
                  <StCommentDelBtn onClick={() => { 
                    setIsEdit(!isEdit); 
                    dispatch(__editComment({id: item.id, content}));
                  }}>완료</StCommentDelBtn> :
                    <StCommentDelBtn onClick={() => { 
                      setIsEdit(!isEdit); 
                    }}>수정</StCommentDelBtn>
              }
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

export const StInput = styled.input`
  background: transparent;
  width: 17rem;
  border: none;
  outline: none;
  color: ${(props) => props.theme.WHITE};
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
`

export const StEditInput = styled.input`
  background: ${(props) => props.theme.WHITE};
  width: 17rem;
  border: border 1px ${(props) => props.theme.WHITE};
  outline: none;
  color: ${(props) => props.theme.BLACK};
  font-family: 'Neo둥근모 Code', 'Neo둥근모Code', 'neodgm-code';
`