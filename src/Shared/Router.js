import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../components/main/Main";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Main/> } />
      </Routes>
    </BrowserRouter>
  )
};

export default Router;