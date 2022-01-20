import ReactDOMServer from "react-dom/server";
import express from "express";
// props 로 넣어주는 location 값에 따라 라우팅해줌
import { StaticRouter } from "react-router-dom/server"; // @6 바뀐 부분
import App from "./App";
import path from "path";
import fs from "fs";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./modules";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import PreloadContext from "./lib/PreloadContext";
import createSagaMiddleware, { END } from "@redux-saga";

// asset-manifest.json 에서 파일 경로들을 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);

const chunks = Object.keys(manifest.files)
  .filter((key) => /chunk\.js$/.exec(key)) // chunk.js 로 끝나는 키값을 찾아서
  .map((key) => `<script src="${manifest.files[key]}"></script>`) // 스크립트 태그로 변환하고
  .join(""); // 합침

function createPage(root, stateScript) {
  // stateScript 으로 초기상태 주입
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
      <meta name="theme-color" content="#000000"/>
      <title>React App</title>
      <link href="${manifest.files["main.css"]}" rel="stylesheet">
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root">
        ${root}
      </div>
      ${stateScript}
      <script src="${manifest.files["runtime-main.js"]}"></script>
      ${chunks}
      <script src="${manifest.files["main.js"]}"></script>
    </body>
  </html>
  `;
}

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = async (req, res, next) => {
  // 404가 떠야하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 시행해줌
  const context = {};
  const sagaMiddleware = createSagaMiddleware();
  // 렌더링 할 때마다 새로운 스토어를 만듬
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk, sagaMiddleware)
  );
  const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();
  // PreloadContext 를 사용하여 프로미스를 수집하고 기다렸다가 다시 렌더링하는 작업
  const preloadContext = {
    done: false,
    promises: [],
  };
  const jsx = (
    <PreloadContext.Provider value={preloadContext}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    </PreloadContext.Provider>
  );
  // renderToStaticMarkup 으로 한 번 렌더링
  // renderToStaticMarkup : 정적인 페이지를 만들 때
  ReactDOMServer.renderToStaticMarkup(jsx);
  store.dispatch(END);
  try {
    await sagaPromise; // 진행중이던 사가들이 모두 끝날 때까지 기다림
    await Promise.all(preloadContext.promises); // 모든 프로미스들을 기다림
  } catch (e) {
    return res.status(500);
  }
  preloadContext.done = true;
  const root = ReactDOMServer.renderToString(jsx); // 렌더링 한 뒤
  // JSON을 문자열로 변환하고 악성 스크립트가 실행되는 것을 방지하기 위해 < 를 치환처리
  // 참고 https://redux.js.org/server-side-rendering#security-considerations
  const stateString = JSON.stringify(store.getState()).replace(/</g, "\\u003c");
  const stateScript = `<script>__PRELOADED_STATE__ = ${stateString}</script>`; // 리덕스 초기상태를 스크립트로 주입

  res.send(createPage(root, stateScript)); // 클라이언트에 넘겨줌
};

const serve = express.static(path.resolve("./build"), {
  index: false, // 홈 경로에서 index.html을 보여주지 않도록 설정
});

app.use(serve); // serverRender 보다 위에 오도록
app.use(serverRender);

app.listen(5001, () => {
  // 5000 번 포트 계속 사용중이라 바꿈
  console.log("Running on Port 5001...");
});
// const html = ReactDOMServer.renderToString(<div>Hello Side Rendering!</div>);
// console.log(html);
