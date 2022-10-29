import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getBoardId } from "../../../redux/modules/Slice/boardSlice";
import { __getUsername } from "../../../redux/modules/Slice/userSlice";
import { DetailMiscContainer, Like } from "./DetailMisc.styled";

export const DetailMisc = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const username = localStorage.getItem("username");

  useEffect(() => {
    dispatch(__getBoardId(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(__getUsername());
  }, [dispatch])

  const heartList = useSelector((state) => state.boards.board.heartList);
  // console.log(heartList)

  const amILiked = heartList?.includes(username)

  return (
    <DetailMiscContainer>
      {
        amILiked ? <Like>취소하기</Like> : <Like>추천하기</Like>
      }
      <p>{ heartList?.length }</p>
    </DetailMiscContainer>
  )
};