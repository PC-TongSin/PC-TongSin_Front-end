import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../Pages//Login/LoginPage';
import { MainPage } from "../Pages/MainPage";
import { BoardPage } from "../Pages/BoardPage";
import { DetailPage } from '../Pages/DetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path='/login' element={<LoginPage />} />
        <Route path="/board" element={ <BoardPage/> } />
        <Route path='/detail' element={ <DetailPage/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
