import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";
import { usePreloader } from "../lib/PreloadContext";
import { getUser } from "../modules/users";

const UserContainer = ({ id }) => {
  // console.log(id, "user container");
  // 이번엔 connect 안쓰고 useSelector, useDispatch 사용
  const user = useSelector((state) => {
    // console.log(state);
    return state.users.user;
  });
  // console.log("----useSelector");
  const dispatch = useDispatch();

  usePreloader(() => dispatch(getUser(id))); // 서버 사이드 렌더링 할 때 API 호출하기
  useEffect(() => {
    if (user && user.id === parseInt(id, 10)) return; // 사용자가 존재하고, 아이디가 일치한다면 다시 요청하지 않음
    dispatch(getUser(id));
  }, [dispatch, id, user]); // 하나라도 바뀌면 새로 요청
  console.log("----useEffect");
  // if (!user) {
  //   console.log("----user not found");
  //   // 컨테이너 유효성 검사 후 return null 을 해야 하는 경우에 Preloader 대신 반환
  //   return <Preloader resolve={() => dispatch(getUser(id))} />;
  // }
  if (!user) return null;
  return <User user={user} />;
};

export default UserContainer;
