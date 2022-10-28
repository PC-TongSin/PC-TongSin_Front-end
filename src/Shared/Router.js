import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignPage from '../Pages/SignPage';
import { MainPage } from '../Pages/MainPage';
import { BoardPage } from '../Pages/BoardPage';
import { DetailPage } from '../Pages/DetailPage';
import UploadPage from '../Pages/UploadPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/sign' element={<SignPage />} />
        <Route path='/board' element={<BoardPage />} />
        <Route path='/detail' element={<DetailPage />} />
        <Route path='/upload' element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
