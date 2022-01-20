import { Route, Routes, useParams } from "react-router";
import UserContainer from "../containers/UserContainer";
import UsersContainer from "../containers/UsersContainer";

const UsersPage = () => {
  // return <UsersContainer />;
  const params = useParams();
  const id = Object.values(params)[0];
  console.log(id, "users page");
  return (
    <Routes>
      <Route path="" element={<UsersContainer />} />
      <Route path="/:id" element={<UserContainer id={id} />} />
    </Routes>
  );
};

export default UsersPage;
