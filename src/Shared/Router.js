import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../components/Main/Main";
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