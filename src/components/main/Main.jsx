import { MainContainer, MainBanner, MainInfo, MainAccessMsg } from "./Main.styled";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Main = () => {

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/sign")
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  }

  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  }, [])

  return(
    <MainContainer>
      <MainBanner>
        <h1>콤-퓨타 통신</h1>
        <p>copyright 1995 SDS</p>
      </MainBanner>
      <MainInfo>[FE]: 김성호, 조재신</MainInfo>
      <MainInfo>[BE]: 김병기, 김연태, 장지윤</MainInfo>
      <MainInfo>
        Debian GNU / Linux 8 ...<br/>
        ATDT 01410 ...
      </MainInfo>
      <MainAccessMsg>
        <p>Finding Host Home.hitel.net ...</p>
      </MainAccessMsg>
      <hr/>
      <MainInfo>로그인 하려면 Enter를 눌러주세요.</MainInfo>
      <LoginInput onKeyPress={onKeyPress} ref={inputFocus}/>
      <LoginBtn onClick={onClick} />
    </MainContainer>
  )
};

export const LoginBtn = styled.button`
  opacity: 0;
`
export const LoginInput = styled.input`
  /* opacity: 0; */
  background-color: transparent;
  outline: none;
  border: none;
`
// enter 누르면 페이지 이동 시키고 싶은데, input에 event 주는 법 말구, 아무 상태에서나 눌러도 가능한 방법은???