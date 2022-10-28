import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../Pages/MainPage";
import { BoardPage } from "../Pages/BoardPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <MainPage/> } />
        <Route exact path="/board" element={ <BoardPage/> } />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;