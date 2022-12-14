import {
  BoardContainer,
  BoardItemSmall,
  BoardItemMedium,
  BoardItemLarge,
} from './Board.styled';
import { useNavigate } from 'react-router-dom';
import { __getBoard } from '../../redux/modules/Slice/boardSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from './Pagenation/Pagenation';

export const Board = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { boards, isBoardChanged } = useSelector((state) => state?.boards);

  useEffect(() => {
    dispatch(__getBoard());
  }, [dispatch, isBoardChanged]);

  const [page, setPage] = useState(useSelector((state) => state?.boards.page));
  const size = useSelector((state) => state?.boards.size);
  const offset = (page - 1) * size;

  return (
    <>
      <BoardContainer>
        <thead>
          <tr>
            <th>번호</th>
            <th>작성자</th>
            <th>닉네임</th>
            <th>날 짜</th>
            <th>조회 수</th>
            <th>댓글 수</th>
            <th>추천 수</th>
            <th>제 목</th>
          </tr>
        </thead>
        <tbody>
          {boards?.slice(offset, offset + size)?.map((item) => {
            return (
              <tr key={item.id}>
                <BoardItemSmall>{item.id}</BoardItemSmall>
                <BoardItemSmall>{item.author}</BoardItemSmall>
                <BoardItemSmall>{item.nickname}</BoardItemSmall>
                <BoardItemMedium>
                  {item.createdAt.substr(0, 10)}
                </BoardItemMedium>
                <BoardItemSmall>{Math.round(item.hit / 3)}</BoardItemSmall>
                <BoardItemSmall>{item.totalCommentCount}</BoardItemSmall>
                <BoardItemSmall>{item.totalHeartCount}</BoardItemSmall>
                <BoardItemLarge
                  onClick={() => {
                    navigate(`/api/boards/${item.id}`);
                  }}
                >
                  {item.title}
                </BoardItemLarge>
              </tr>
            );
          })}
        </tbody>
      </BoardContainer>
      <Pagination
        total={boards?.length}
        size={size}
        page={page}
        setPage={setPage}
      />
    </>
  );
};
