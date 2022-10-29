import { useNavigate } from 'react-router-dom';
import { Board } from '../components/Board/Board';
import Header from '../components/Header/Header';

export const BoardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <button
        onClick={() => {
          navigate('/upload');
        }}
      >
        업로드하러가기
      </button>
      <Board />
    </>
  );
};
