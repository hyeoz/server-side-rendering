import { Route, Routes, useParams } from "react-router";
import UserContainer from "../containers/UserContainer";
import UsersContainer from "../containers/UsersContainer";

const UserPage = () => {
  // return <UsersContainer />;
  const { id } = useParams();
  // console.log(id);
  return (
    <>
      <UsersContainer />
      <Routes>
        <Route path="/:id" element={<UserContainer id={id} />} />
      </Routes>
    </>
  );
};

export default UserPage;
