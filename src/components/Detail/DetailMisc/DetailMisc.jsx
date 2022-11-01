import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getBoardId, __countHeart, resetStatusBoard } from "../../../redux/modules/Slice/boardSlice";
import { __getUsername } from "../../../redux/modules/Slice/userSlice";
import { DetailMiscContainer, Like } from "./DetailMisc.styled";

export const DetailMisc = ({ totalHeartCount }) => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const username = localStorage.getItem("username");
  const isBoardChanged = useSelector((state) => state.boards.isBoardChanged);

  useEffect(() => {
    dispatch(__getBoardId(id));
    if (isBoardChanged) {
      dispatch(__getBoardId(id));
      dispatch(resetStatusBoard());
    }
  }, [dispatch, id, isBoardChanged]);

  useEffect(() => {
    dispatch(__getUsername());
  }, [dispatch])

  const heartList = useSelector((state) => state.boards.board.heartList);
  const amILiked = heartList?.includes(username)
  const [heart, setHeart] = useState(false)

  return (
    <DetailMiscContainer>
      {
        amILiked ? 
          <Like onClick={() => {
            dispatch(__countHeart({id: +id}))
            setHeart(!heart)
          }}
          >취소하기</Like> : 
          <Like
            onClick={() => {
              dispatch(__countHeart({id: +id}))
              setHeart(!heart)
            }}
          >추천하기</Like>
      }
      <p>{ totalHeartCount }</p>
    </DetailMiscContainer>
  )
};