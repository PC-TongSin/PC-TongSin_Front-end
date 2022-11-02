import '@kfonts/neodgm-code';
import { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme } from './theme/Theme';
import { GlobalStyle } from './theme/GlobalStyle';
import { useState } from 'react';
import Router from './Shared/Router';
import styled from 'styled-components';
import { BsFillMoonFill } from "react-icons/bs";


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  const myTheme = localStorage.getItem('theme');

  return (
    <ThemeProvider theme={myTheme === 'light' ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <div className='App'>
        <Router />
        {
          myTheme === "light" ? (
            <LightThemeBtn onClick={toggleTheme}><BsFillMoonFill style={{"font-size": "2rem"}}/></LightThemeBtn>
          ) : <DarkThemeBtn onClick={toggleTheme}><BsFillMoonFill style={{"font-size": "2rem"}}/></DarkThemeBtn>
        }
      </div>
    </ThemeProvider>
  );
}

export default App;

const LightThemeBtn = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  border-radius: 1rem;
  background: ${(props) => props.theme.GREY};
  color: ${(props) => props.theme.BLACK};
  padding: 1rem;
  text-align: center;
  width: 75px;
  height: 75px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  opacity: 1;
  &:hover {
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
  background: black;
  color: #fff
  }
`

const DarkThemeBtn = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  border-radius: 1rem;
  background: ${(props) => props.theme.GREY};
  color: ${(props) => props.theme.BLACK};
  padding: 1rem;
  text-align: center;
  width: 75px;
  height: 75px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  opacity: 1;
  &:hover {
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  transform: rotate(360deg);
  background: #020080;
  color: #fff
  }
`