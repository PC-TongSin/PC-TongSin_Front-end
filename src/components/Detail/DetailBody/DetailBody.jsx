import {
  DetailContainer,
  DetailNotice,
  DetailTitle,
  DetailInfo,
  DetailBody,
  DetailBtn,
  DetailTextarea,
} from './DetailBody.styled';
import { DetailMisc } from '../DetailMisc/DetailMisc';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {
  __deleteBoardId,
  __fixBoardId,
  __getBoardId,
} from '../../../redux/modules/Slice/boardSlice';
import { __getUsername } from '../../../redux/modules/Slice/userSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Detail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [onFix, setOnFix] = useState(false);

  const [textareaContent, setTextareaContent] = useState('');

  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(__getUsername());
  }, [dispatch]);

  const boardItem = useSelector((state) => state.boards?.board);
  const username = useSelector((state) => state.users?.username, shallowEqual);
  localStorage.getItem('username', username);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(__deleteBoardId(id));
    navigate("/board")
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setOnFix(false);
  };
  const handleFix = (e) => {
    e.preventDefault();
    setOnFix(true);
    setTextareaContent('');
  };

  const handleTextareaChange = (e) => {
    e.preventDefault();
    setTextareaContent(e.target.value);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    dispatch(
      __fixBoardId({
        id: id,
        data: { title: boardItem?.title, content: textareaContent },
      })
    );
    setOnFix(false);
  };

  // const amILiked = 내가 좋아요 누른 게시물인

  return (
    <DetailContainer>
      <DetailNotice>
        [공지] 안내 메시지입니다. 항상 커밋을 잘 하십시오.
      </DetailNotice>

      <form onSubmit={ handleSubmit }>
        <DetailTitle>{ boardItem?.title }</DetailTitle>

        <DetailInfo>
          <p>{ boardItem?.author }</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>{ boardItem?.createdAt?.substr(0, 10) }</p>
        </DetailInfo>
        {
          username === boardItem.author ? (
            <>
              {
                onFix ? (
                  <DetailBtn>확인</DetailBtn>
                ) : (
                  <DetailBtn onClick={handleDelete}>게시글 삭제</DetailBtn>
                )
              }
              {
                onFix ? (
                  <DetailBtn onClick={handleCancel}>취소</DetailBtn>
                ) : (
                  <DetailBtn onClick={handleFix}>게시글 수정</DetailBtn>
                )
              }
            </>
          ) : null
        }

        {
          onFix ? (
            <DetailTextarea
              defaultValue={boardItem.content}
              // value={textareaContent}
              onChange={handleTextareaChange}
            />
          ) : (
            <DetailBody>{boardItem.content}</DetailBody>
          )
        }
      </form>
      <DetailMisc totalHeartCount={boardItem.totalHeartCount}/>

      <DetailInfo />
    </DetailContainer>
  );
};
