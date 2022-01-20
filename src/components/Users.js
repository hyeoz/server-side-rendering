import { Link } from "react-router-dom";

const Users = ({ users }) => {
  if (!users) return null; // 유효한 users 값이 없다면 null 반환
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
