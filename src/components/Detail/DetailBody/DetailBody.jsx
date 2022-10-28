import { DetailContainer, DetailNotice, DetailTitle, DetailInfo, DetailBody } from "./DetailBody.styled"
import { CommentList } from "../../Comment/CommentList/CommentList";
import { CommentInput } from "../../Comment/CommentInput/CommentInput"
import { CommentMisc } from "../../Comment/CommentModal/CommentMisc";

export const Detail = () => {
  return (
    <DetailContainer>
      <DetailNotice>
        [공지] 안내 메시지입니다.
        항상 커밋을 잘 하십시오.
      </DetailNotice>
      <DetailTitle>제목입니다.</DetailTitle>
      <DetailInfo>
        <p>김성호</p><p></p><p></p>   <p></p> <p>좋아요: 14</p> <p></p> <p>2022-10-29</p>
      </DetailInfo>
      <DetailBody>
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
      </DetailBody>

      <DetailInfo/>
      <CommentInput/>
      <CommentList/>
      <CommentList/>
      <CommentList/>
      <CommentList/>
      <CommentList/>
    </DetailContainer>
  )
};

