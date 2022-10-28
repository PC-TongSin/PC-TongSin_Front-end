import "@kfonts/neodgm-code";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./theme/Theme"
import { GlobalStyle } from "./theme/GlobalStyle";
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState("dark");

  const isLight = theme === "light";

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={ theme === "light" ? LightTheme : DarkTheme }>
      <div className="App">
        <GlobalStyle/>
        <p>피씨통신입니다. This is 3조  ㈜㉠r끔『핑그겅듀』™</p>
        <p>여러분 ㉠ㅣ억 ㄴr ㅅI ㄴr 요...?</p>
        <button onClick={toggleTheme}>눌러봐</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
