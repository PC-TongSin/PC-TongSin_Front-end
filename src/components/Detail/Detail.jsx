import { DetailContainer, DetailNotice, DetailTitle, DetailInfo, DetailBody } from "./Detail.styled"

export const Detail = () => {
  return (
    <DetailContainer>
      <DetailNotice>
        [공지] 안내 메시지입니다.
        항상 커밋을 잘 하십시오.
      </DetailNotice>
      <DetailTitle>제목입니다.</DetailTitle>
      여기, 글쓴이, 날짜, 이런거 들어갈거임
      <DetailBody>
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
        내용입니다.        내용입니다.
      </DetailBody>
    </DetailContainer>
  )
};

