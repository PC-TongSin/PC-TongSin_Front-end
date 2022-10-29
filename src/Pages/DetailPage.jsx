import { CommentInput } from "../components/Comment/CommentInput/CommentInput";
import { CommentList } from "../components/Comment/CommentList/CommentList";
import { Detail } from "../components/Detail/DetailBody/DetailBody";
import Header from "../components/Header/Header";

export const DetailPage = () => {
  return (
    <>
      <Header/>
      <Detail/>
      <CommentInput/>
      <CommentList/>
    </>
  )
}