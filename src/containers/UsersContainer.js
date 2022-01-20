import { useEffect } from "react";
import { connect } from "react-redux";
import Users from "../components/Users";
import { Preloader } from "../lib/PreloadContext";
import { getUsers } from "../modules/users";

const UsersContainer = ({ users, getUsers }) => {
  // 컴포넌트가 마운트되고나서 호출
  useEffect(() => {
    if (users) return; // 이미 유효한 users 값이 있다면 아무것도 반환하지 않음
    getUsers();
  }, [users, getUsers]);
  return (
    <div>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </div>
  );
};

export default connect(
  (state) => ({
    users: state.users.users,
  }),
  { getUsers }
)(UsersContainer);
