import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from '../components/main/Main';
import LoginPage from '../Pages/Login/LoginPage';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
