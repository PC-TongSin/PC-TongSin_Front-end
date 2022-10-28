import styled from "styled-components";
import { DetailContainer, DetailNotice, DetailTitle, DetailInfo, DetailBody } from "./Detail.styled"

export const Detail = () => {
  return (
    <DetailContainer>
      <DetailNotice>
        [공지] 안내 메시지입니다.
        항상 커밋을 잘 하십시오.
      </DetailNotice>
      <DetailTitle>제목입니다.</DetailTitle>
      <DetailInfo>
        <tr>
          <th>날짜</th>
        </tr>
        <th>닉네임</th>
        <th>추천수</th>
      </DetailInfo>
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

