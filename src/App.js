import "./App.css";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import UsersPage from "./pages/UsersPage";
// const dotenv = require("dotenv");
// import dotenv from "dotenv";
// dotenv.config();

function App() {
  console.log(process.env.REACT_APP_BABEL_ENV, process.env.NODE_ENV);
  return (
    <div className="App">
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users/*" element={<UsersPage />} />
      </Routes>
    </div>
  );
}

export default App;
