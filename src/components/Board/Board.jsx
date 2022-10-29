import {
  BoardContainer,
  BoardItemSmall,
  BoardItemMedium,
  BoardItemLarge,
} from './Board.styled';
import { useNavigate } from 'react-router-dom';
import { __getBoard } from '../../redux/modules/Slice/boardSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const Board = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(__getBoard());
  },[dispatch])

  const boards = useSelector((state) => state?.boards?.boards?.data);
  console.log(boards)

  return (
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
          {
            boards?.map((item) => {
              return (
                <tr key={ item.id }>
                  <BoardItemSmall>{ item.id }</BoardItemSmall>
                  <BoardItemSmall>{ item.author }</BoardItemSmall>
                  <BoardItemMedium>{ item.author }</BoardItemMedium>
                  <BoardItemMedium>{ item.createdAt.substr(0,10) }</BoardItemMedium>
                  <BoardItemSmall>{ item.totalCommentCount }</BoardItemSmall>
                  <BoardItemSmall>{ item.totalHeartCount }</BoardItemSmall>
                  <BoardItemLarge
                    onClick={() => {
                      navigate('/detail');
                    }}
                  >
                    { item.title }
                  </BoardItemLarge>
                </tr>
              )
            })
          }
        </tbody>
    </BoardContainer>
  );
};

