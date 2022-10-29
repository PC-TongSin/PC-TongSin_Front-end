import { DetailContainer, DetailNotice, DetailTitle, DetailInfo, DetailBody, DetailBtn } from "./DetailBody.styled"
import { CommentList } from "../../Comment/CommentList/CommentList";
import { CommentInput } from "../../Comment/CommentInput/CommentInput"
import { DetailMisc } from "../DetailMisc/DetailMisc";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardId } from "../../../redux/modules/Slice/boardSlice";
import { __getUsername } from "../../../redux/modules/Slice/userSlice"

export const Detail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(__getUsername());
  }, [dispatch])

  const boardItem = useSelector((state) => state.boards.board);
  const username = useSelector((state) => state.users?.username);
  localStorage.setItem("username", username)
  
  // console.log(username)

  return (
    <DetailContainer>
      <DetailNotice>
        [공지] 안내 메시지입니다.
        항상 커밋을 잘 하십시오.
      </DetailNotice>
      <DetailTitle>{ boardItem?.title }</DetailTitle>
      <DetailInfo>
        <p>{ boardItem?.author }</p><p></p><p></p><p></p><p></p><p></p><p>{ boardItem?.createdAt?.substr(0,10) }</p>
      </DetailInfo>
      {
        username === boardItem.author ? (
          <>
            <DetailBtn>삭제</DetailBtn>
            <DetailBtn>수정</DetailBtn>
          </>
        ) : null
      }
      <DetailBody>
        { boardItem.content }
      </DetailBody>

      <DetailMisc/>
      
      <DetailInfo/>
    </DetailContainer>
  )
};