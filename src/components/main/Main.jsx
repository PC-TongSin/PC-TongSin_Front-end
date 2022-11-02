import {
  MainContainer,
  MainBanner,
  MainInfo,
  MainAccessMsg,
} from './Main.styled';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export const Main = () => {
  const theme = localStorage.getItem('theme');

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/login');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  return (
    <MainContainer>
      <MainBanner>
        <h1>콤-퓨타 통신</h1>

        {theme === 'light' ? (
          <>
            <img src='https://ifh.cc/g/vt2KF2.png' alt='blueBold' />
          </>
        ) : (
          <>
            <img src='https://ifh.cc/g/ZCrX0r.png' alt='blackBold' />
          </>
        )}

        <p>copyright 1995 SDS</p>
      </MainBanner>
      <MainInfo>[FE]: 김성호, 조재신</MainInfo>
      <MainInfo>[BE]: 김병기, 김연태, 장지윤</MainInfo>
      <MainInfo>
        Debian GNU / Linux 8 ...
        <br />
        ATDT 01410 ...
      </MainInfo>
      <MainAccessMsg>
        <p>Finding Host Home.hitel.net ...</p>
      </MainAccessMsg>
      <hr />
      <MainInfo>로그인 하려면 Enter를 눌러주세요.</MainInfo>
      <ScreenFlashLine>
        <ScreenLine>
          <div className='red' />
          <div className='white' />
          <div className='green' />
        </ScreenLine>
      </ScreenFlashLine>
      <LoginInput onKeyPress={onKeyPress} ref={inputFocus} />
      <LoginBtn onClick={onClick} />
    </MainContainer>
  );
};

export const LoginBtn = styled.button`
  opacity: 0;
`;
export const LoginInput = styled.input`
  /* opacity: 0; */
  background-color: transparent;
  outline: none;
  border: none;
`;

export const ScreenFlashLine = styled.div`
  position: fixed;
	bottom: 0;
	width: 100%;
`

export const ScreenLine = styled.div`
	width: 100%;
	height: 3px;
	position: relative;
	animation: 	appear 1s infinite, 
              flick 1s infinite,
              big-jump 5ms infinite;
  .white{
		background: white;
		position: relative;
		top:0;
		left: 0;
		height: 4px;
	}
	.red{
		background: red;
		position: relative;
		top:0;
		left: 0;
		height: 1px;
	}
	.green{
		background: green;
		position: relative;
		top:0;
		left: 0;
		height: 1px;
	}
  @keyframes appear {
    0%   { filter: blur(5px); opacity: 0.85;}
    50% { filter: blur(3px); opacity: 0.85;}
    100%{ filter: blur(4px); opacity: 0.85;}
  }
  @keyframes big-jump {
      0% { top:0; }
      10% { top: -100px; }
      12% { top:0; }
      54% { top:0; }
      55% { top: -300px; }
      56% { top:0; }
      86% { top:0; }
      87% { top: -600px; }
      88% { top:0; }
    }
    @keyframes flick {
      50% { left:2px; }
      51% { left:0; }
    }
`