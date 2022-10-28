import { BoardContainer, BoardItemSmall,BoardItemMedium, BoardItemLarge } from "./Board.styled"

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
            <BoardItemSmall>1</BoardItemSmall>
            <BoardItemSmall>김성호</BoardItemSmall>
            <BoardItemMedium>핑크겅듀</BoardItemMedium>
            <BoardItemMedium>2022-10-28</BoardItemMedium>
            <BoardItemSmall>14</BoardItemSmall>
            <BoardItemSmall>0</BoardItemSmall>
            <BoardItemLarge>하이텔은 살아있다</BoardItemLarge>
          </tr>
          <tr>
            <BoardItemSmall>2</BoardItemSmall>
            <BoardItemSmall>김성호</BoardItemSmall>
            <BoardItemMedium>핑크겅듀</BoardItemMedium>
            <BoardItemMedium>2022-10-28</BoardItemMedium>
            <BoardItemSmall>14</BoardItemSmall>
            <BoardItemSmall>1</BoardItemSmall>
            <BoardItemLarge>내가 만든 쿠키</BoardItemLarge>
          </tr>
          <tr>
            <BoardItemSmall>3</BoardItemSmall>
            <BoardItemSmall>김성호</BoardItemSmall>
            <BoardItemMedium>핑크겅듀</BoardItemMedium>
            <BoardItemMedium>2022-10-28</BoardItemMedium>
            <BoardItemSmall>14</BoardItemSmall>
            <BoardItemSmall>2</BoardItemSmall>
            <BoardItemLarge>너를 위해 구웠지</BoardItemLarge>
          </tr>
          <tr>
            <BoardItemSmall>4</BoardItemSmall>
            <BoardItemSmall>김성호</BoardItemSmall>
            <BoardItemMedium>핑크겅듀</BoardItemMedium>
            <BoardItemMedium>2022-10-28</BoardItemMedium>
            <BoardItemSmall>14</BoardItemSmall>
            <BoardItemSmall>3</BoardItemSmall>
            <BoardItemLarge>내가 만든 쿠키 너를 위해 구웠지</BoardItemLarge>
          </tr>
          <tr>
            <BoardItemSmall>5</BoardItemSmall>
            <BoardItemSmall>김성호</BoardItemSmall>
            <BoardItemMedium>핑크겅듀</BoardItemMedium>
            <BoardItemMedium>2022-10-28</BoardItemMedium>
            <BoardItemSmall>14</BoardItemSmall>
            <BoardItemSmall>3</BoardItemSmall>
            <BoardItemLarge>엄청 긴 타이틀!!!!엄청 긴 타이틀!!!!엄청 긴 타이틀!!!!엄청 긴 타이틀!!!!엄청 긴 타이틀!!!!엄청 긴 타이틀!!!!엄청 긴 타이틀!!!!엄청 긴 타이틀!!!!</BoardItemLarge>
          </tr>
          <tr>
            <BoardItemSmall>6</BoardItemSmall>
            <BoardItemSmall>김성호</BoardItemSmall>
            <BoardItemMedium>핑크겅듀</BoardItemMedium>
            <BoardItemMedium>2022-10-28</BoardItemMedium>
            <BoardItemSmall>14</BoardItemSmall>
            <BoardItemSmall>3</BoardItemSmall>
            <BoardItemLarge>하이텔은 살아있다</BoardItemLarge>
          </tr>
          <tr>
            <BoardItemSmall>7</BoardItemSmall>
            <BoardItemSmall>김성호</BoardItemSmall>
            <BoardItemMedium>핑크겅듀</BoardItemMedium>
            <BoardItemMedium>2022-10-28</BoardItemMedium>
            <BoardItemSmall>14</BoardItemSmall>
            <BoardItemSmall>3</BoardItemSmall>
            <BoardItemLarge>하이텔은 살아있다</BoardItemLarge>
          </tr>

        </tbody>
      </div>
    </BoardContainer>
  )
};