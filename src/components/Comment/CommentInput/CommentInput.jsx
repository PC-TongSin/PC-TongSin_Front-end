import { __addComment } from '../../../redux/modules/Slice/commentSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  StCommentInputContainer,
  StCommentInput,
  StCommentBtn,
} from './CommentInput.styled';
import { __getBoardId } from '../../../redux/modules/Slice/boardSlice';

export const CommentInput = () => {
  const { id } = useParams();
  const board_id = id;
  const dispatch = useDispatch();

  const [content, setContent] = useState('');
  const commentChangeHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  return (
    <StCommentInputContainer>
      <StCommentInput
        onChange={commentChangeHandler}
        placeholder='댓글을 달아보세요'
        value={content}
        maxLength='30'
      />
      <StCommentBtn
        onClick={() => {
          dispatch(__getBoardId(id));
          dispatch(__addComment({ board_id, content }));
          setContent('');
        }}
      >
        댓글 달기
      </StCommentBtn>
    </StCommentInputContainer>
  );
};
