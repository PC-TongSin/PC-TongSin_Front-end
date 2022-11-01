import {
  Comments,
  StCommentContent,
  StComment,
  StCommentDelBtn,
  StInput,
  StEditInput,
} from './CommentList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { __getBoardId } from '../../../redux/modules/Slice/boardSlice';
import { useParams } from 'react-router-dom';
import {
  __delComment,
  __editComment,
  resetStatusComment
} from '../../../redux/modules/Slice/commentSlice';
import { useState } from 'react';


export const CommentList = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const commentList = useSelector((state) => state.boards?.board?.commentResDtoList);
  const isCommentChanged = useSelector((state) => state.comment.isCommentChanged); 
  const [isEdit, setIsEdit] = useState(false);
  const [content, setContent] = useState('');

  const commentChangeHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  useEffect(() => {
    dispatch(__getBoardId(id)); // 이거 때문에 조회수 올라감
    if (isCommentChanged) {
      dispatch(__getBoardId(id));
      dispatch(resetStatusComment());
    };
  }, [dispatch, id, isCommentChanged]);

  return (
    <div>
      {
        !!commentList && commentList?.map((item) => {
          return (
            <Comments key={ item.comment_id }>
              <StComment>{ item.author }</StComment>
              <StCommentContent>
                {isEdit ? (
                  <StEditInput
                    defaultValue={ item.content }
                    spellcheck={ false }
                    onChange={ commentChangeHandler }
                  />
                ) : (
                  <StInput defaultValue={ item.content } disabled />
                )}
              </StCommentContent>
              <StComment>{ item?.createAt?.substr(0,10) }</StComment>
  
              {isEdit ? (
                <StCommentDelBtn
                  onClick={() => {
                    dispatch(__editComment({ id: item.comment_id, content }));
                    setIsEdit(!isEdit);
                  }}
                >완료
                </StCommentDelBtn>
              ) : (
                <StCommentDelBtn
                  onClick={() => {
                    setIsEdit(!isEdit);
                  }}
                >수정
                </StCommentDelBtn>
              )}

              <StCommentDelBtn
                onClick={() => {
                  dispatch(__delComment(item.comment_id));
                }}
              >X
              </StCommentDelBtn>
            </Comments>
          );
        })
      }
    </div>
  );
};