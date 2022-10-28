import {
  BoardListContainer,
  BoardContainer,
  BoardItemSmall,
  BoardItemMedium,
  BoardItemLarge,
} from './Board.styled';
import { useNavigate } from 'react-router-dom';

export const Board = () => {
  const navigate = useNavigate();

  return (
    <BoardListContainer>
      <BoardContainer>
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
              <BoardItemMedium>털보코딩</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>0</BoardItemSmall>
              <BoardItemLarge
                onClick={() => {
                  navigate('/detail');
                }}
              >
                하이텔은 살아있다
              </BoardItemLarge>
            </tr>
            <tr>
              <BoardItemSmall>2</BoardItemSmall>
              <BoardItemSmall>김병기</BoardItemSmall>
              <BoardItemMedium>천마지존</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>1</BoardItemSmall>
              <BoardItemLarge>내가 만든 쿠키</BoardItemLarge>
            </tr>
            <tr>
              <BoardItemSmall>3</BoardItemSmall>
              <BoardItemSmall>장지윤</BoardItemSmall>
              <BoardItemMedium>핑크감자</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>2</BoardItemSmall>
              <BoardItemLarge>너를 위해 구웠지</BoardItemLarge>
            </tr>
            <tr>
              <BoardItemSmall>4</BoardItemSmall>
              <BoardItemSmall>김연태</BoardItemSmall>
              <BoardItemMedium>말랑가지</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>3</BoardItemSmall>
              <BoardItemLarge>내가 만든 쿠키 너를 위해 구웠지</BoardItemLarge>
            </tr>
            <tr>
              <BoardItemSmall>5</BoardItemSmall>
              <BoardItemSmall>조재신</BoardItemSmall>
              <BoardItemMedium>핑크겅듀</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>3</BoardItemSmall>
              <BoardItemLarge>
                엄청 긴 타이틀!!!!엄청 긴 타이틀!!!!엄청 긴 타이틀!!!!엄청 긴
              </BoardItemLarge>
            </tr>
            <tr>
              <BoardItemSmall>4</BoardItemSmall>
              <BoardItemSmall>김연태</BoardItemSmall>
              <BoardItemMedium>말랑가지</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>3</BoardItemSmall>
              <BoardItemLarge>내가 만든 쿠키 너를 위해 구웠지</BoardItemLarge>
            </tr>
            <tr>
              <BoardItemSmall>4</BoardItemSmall>
              <BoardItemSmall>김연태</BoardItemSmall>
              <BoardItemMedium>말랑가지</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>3</BoardItemSmall>
              <BoardItemLarge>내가 만든 쿠키 너를 위해 구웠지</BoardItemLarge>
            </tr>
            <tr>
              <BoardItemSmall>4</BoardItemSmall>
              <BoardItemSmall>김연태</BoardItemSmall>
              <BoardItemMedium>말랑가지</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>3</BoardItemSmall>
              <BoardItemLarge>내가 만든 쿠키 너를 위해 구웠지</BoardItemLarge>
            </tr>
            <tr>
              <BoardItemSmall>4</BoardItemSmall>
              <BoardItemSmall>김연태</BoardItemSmall>
              <BoardItemMedium>말랑가지</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>3</BoardItemSmall>
              <BoardItemLarge>내가 만든 쿠키 너를 위해 구웠지</BoardItemLarge>
            </tr>
            <tr>
              <BoardItemSmall>4</BoardItemSmall>
              <BoardItemSmall>김연태</BoardItemSmall>
              <BoardItemMedium>말랑가지</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>3</BoardItemSmall>
              <BoardItemLarge>내가 만든 쿠키 너를 위해 구웠지</BoardItemLarge>
            </tr>
            <tr>
              <BoardItemSmall>4</BoardItemSmall>
              <BoardItemSmall>김연태</BoardItemSmall>
              <BoardItemMedium>말랑가지</BoardItemMedium>
              <BoardItemMedium>2022-10-28</BoardItemMedium>
              <BoardItemSmall>14</BoardItemSmall>
              <BoardItemSmall>3</BoardItemSmall>
              <BoardItemLarge>내가 만든 쿠키 너를 위해 구웠지</BoardItemLarge>
            </tr>
          </tbody>
      </BoardContainer>
    </BoardListContainer>
  );
};

