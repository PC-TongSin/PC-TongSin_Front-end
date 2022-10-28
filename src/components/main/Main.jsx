import { MainContainer, MainBanner, MainInfo, MainAccessMsg } from "../Main.styled";
import styled from "styled-components";

export const Main = () => {

  const onClick = () => {
    alert("로그인 페이지로 이동")
  }

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  }

  return(
    <MainContainer>
      <MainBanner>
        <h1>Logo</h1>
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
      <input onKeyPress={onKeyPress} />
      <LoginBtn onClick={onClick} />
    </MainContainer>
  )
};

export const LoginBtn = styled.button`
  opacity: 1;
`