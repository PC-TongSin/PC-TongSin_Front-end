import styled from "styled-components";

export const Board = () => {
  return (
    <BoardContainer>
      <div>
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>닉네임</th>
            <th>날짜</th>
            <th>조회수</th>
            <th>추천수</th>
            <th>제 목</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>김성호</td>
            <td>핑크겅듀</td>
            <td>2022-10-28</td>
            <td>14</td>
            <td>3</td>
            <td>하이텔은 살아있다</td>
          </tr>
          <tr>
            <td>1</td>
            <td>김성호</td>
            <td>핑크겅듀</td>
            <td>2022-10-28</td>
            <td>14</td>
            <td>3</td>
            <td>하이텔은 살아있다</td>
          </tr>
          <tr>
            <td>1</td>
            <td>김성호</td>
            <td>핑크겅듀</td>
            <td>2022-10-28</td>
            <td>14</td>
            <td>3</td>
            <td>하이텔은 살아있다</td>
          </tr>
          <tr>
            <td>1</td>
            <td>김성호</td>
            <td>핑크겅듀</td>
            <td>2022-10-28</td>
            <td>14</td>
            <td>3</td>
            <td>하이텔은 살아있asdasdasdsaasdasdasdasdasd</td>
          </tr>
        </tbody>
      </div>
    </BoardContainer>
  )
};

export const BoardContainer = styled.table`
  margin: 0 auto;
  margin-top: 6rem;
  height: 80vh;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  & th, td {
    border-bottom: 1px solid white;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 5rem;
  }
`

// export const BoardItemTitle = styled.td`
//   width
// `