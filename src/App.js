import "@kfonts/neodgm-code";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./theme/Theme"
import { GlobalStyle } from "./theme/GlobalStyle";
import { useState } from 'react';
import Router from "./Shared/Router";

function App() {

  const [theme, setTheme] = useState("dark");

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
        <Router />
        <button onClick={toggleTheme}>눌러봐</button>
      </div>
    </ThemeProvider>
  );
}

export default App;
