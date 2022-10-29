import { DetailContainer, DetailNotice, DetailTitle, DetailInfo, DetailBody } from "./DetailBody.styled"
import { CommentList } from "../../Comment/CommentList/CommentList";
import { CommentInput } from "../../Comment/CommentInput/CommentInput"
import { CommentMisc } from "../../Comment/CommentModal/CommentMisc";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getBoardId } from "../../../redux/modules/Slice/boardSlice";

export const Detail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(id);

  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  const boardItem = useSelector((state) => state.boards.board);
  console.log(boardItem);

  return (
    <DetailContainer>
      <DetailNotice>
        [공지] 안내 메시지입니다.
        항상 커밋을 잘 하십시오.
      </DetailNotice>
      <DetailTitle>{ boardItem?.title }</DetailTitle>
      <DetailInfo>
        <p>{ boardItem?.author }</p><p></p><p></p><p></p><p>좋아요: { boardItem?.totalHeartCount }</p><p></p><p>{ boardItem?.createdAt?.substr(0,10) }</p>
      </DetailInfo>
      <DetailBody>
        { boardItem.content }
      </DetailBody>

      <DetailInfo/>
      <CommentInput/>
      <CommentList/>
    </DetailContainer>
  )
};

