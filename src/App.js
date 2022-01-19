import "./App.css";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";

function App() {
  return (
    <div className="App">
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
      </Routes>
    </div>
  );
}

export default App;
