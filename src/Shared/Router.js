import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignPage from '../Pages/SignPage';
import { MainPage } from '../Pages/MainPage';
import { BoardPage } from '../Pages/BoardPage';
import { DetailPage } from '../Pages/DetailPage';
import UploadPage from '../Pages/UploadPage';
import LoginPage from '../Pages/LoginPage';
import ChatPage from '../Pages/ChatPage';
import { ChatListPage } from '../Pages/ChatListPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/board' element={<BoardPage />} />
        <Route path='/sign' element={<SignPage />} />
        <Route path='/api/boards/:id' element={<DetailPage />} />
        <Route path='/upload' element={<UploadPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/chatList' element={<ChatListPage />} />
        <Route path='/chat' element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
