import "./App.css";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import UsersPage from "./pages/UsersPage";
// import UsersContainer from "./containers/UsersContainer";
// import UserPage from "./pages/UserPage";
// const dotenv = require("dotenv");
// import dotenv from "dotenv";
// dotenv.config();

function App() {
  // console.log(process.env.REACT_APP_BABEL_ENV, process.env.NODE_ENV);
  // useRoutes 사용하는 방법
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <Menu />
  //         <hr />
  //       </>
  //     ),
  //   },
  //   { path: "/red", element: <RedPage /> },
  //   { path: "/Blue", element: <BluePage /> },
  //   {
  //     path: "/users",
  //     element: <UsersPage />,
  //     children: [{ path: ":id", element: <UserPage /> }],
  //   },
  // ]);
  // return element;
  return (
    <div className="App">
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users/*" element={<UsersPage />} />
        {/* <Route path="/users/:id/*" element={<UserPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
