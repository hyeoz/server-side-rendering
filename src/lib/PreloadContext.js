import { createContext, useContext } from "react";

// 클라이언트 환경 : null
// 서버 환경 : {done: false, promises: []}
const PreloadContext = createContext(null);
export default PreloadContext;

// resolve 는 함수 타입
export const Preloader = ({ resolve }) => {
  const preloadContext = useContext(PreloadContext);
  if (!preloadContext) return null; // context 값이 유효하지 않다면 null 반환
  if (preloadContext.done) return null; // 이미 작업이 끝났다면 null 반환

  // promise 배열에 프로미스 형태로 등록
  // resolve 함수가 프로미스를 반환하지 않더라도 프로미스 형태를 만들어줘야 하므로 Promise.resolve 사용
  preloadContext.promise.push(Promise.resolve(resolve()));
  return null;
};
