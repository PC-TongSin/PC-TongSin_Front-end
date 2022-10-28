import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignPage from '../Pages//Sign/SignPage';
import { MainPage } from "../Pages/MainPage";
import { BoardPage } from "../Pages/BoardPage";
import { DetailPage } from '../Pages/DetailPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage/> } />
        <Route path='/sign' element={<SignPage />} />
        <Route path="/board" element={ <BoardPage/> } />
        <Route path='/detail' element={ <DetailPage/> } />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
