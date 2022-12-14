import { useNavigate } from 'react-router-dom';
import { Board } from '../components/Board/Board';
import Header from '../components/Header/Header';
import styled from 'styled-components';

export const BoardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <UploadBtn
        onClick={() => {
          navigate('/upload');
        }}
      >글 작성
      </UploadBtn>
      <Board />
    </>
  );
};

const UploadBtn = styled.button`
  background: transparent;
  width: 15rem;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding: 1rem;
  font-size: 2rem;
  font-family: 'Neo둥근모 Code';
  color: ${(props) => props.theme.WHITE};
  border: 1px solid ${(props) => props.theme.WHITE};
  transition: all 0.3s;
  &:hover {
    color: ${(props) => props.theme.BLACK};
    border: 1px solid ${(props) => props.theme.WHITE};
    background: ${(props) => props.theme.GREY};
  }
`