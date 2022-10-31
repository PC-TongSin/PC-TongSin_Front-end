import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getBoardId, __countHeart } from "../../../redux/modules/Slice/boardSlice";
import { __getUsername } from "../../../redux/modules/Slice/userSlice";
import { DetailMiscContainer, Like } from "./DetailMisc.styled";

export const DetailMisc = ({ totalHeartCount }) => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const username = localStorage.getItem("username");

  useEffect(() => {
    dispatch(__getBoardId(id)); // 이거때문에 hit 2개씩 올라감
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(__getUsername());
  }, [dispatch])

  const heartList = useSelector((state) => state.boards.board.heartList);
  // console.log(heartList)

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
              dispatch(__countHeart({id: id*1}))
              setHeart(!heart)
            }}
          >추천하기</Like>
      }
      <p>{ totalHeartCount }</p>
    </DetailMiscContainer>
  )
};