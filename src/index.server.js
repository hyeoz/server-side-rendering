import ReactDOMServer from "react-dom/server";
import express from "express";
// props 로 넣어주는 location 값에 따라 라우팅해줌
import { StaticRouter } from "react-router-dom/server"; // @6 바뀐 부분
import App from "./App";
import path from "path";
import fs from "fs";

// asset-manifest.json 에서 파일 경로들을 조회
const manifest = JSON.parse(
  fs.readFileSync(path.resolve("./build/asset-manifest.json"), "utf8")
);

const chunks = Object.keys(manifest.files)
  .filter((key) => /chunk\.js$/.exec(key)) // chunk.js 로 끝나는 키값을 찾아서
  .map((key) => `<script src="${manifest.files[key]}"></script>`) // 스크립트 태그로 변환하고
  .join(""); // 합침

function createPage(root) {
  return `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8"/>
    <link rel="icon" href="/favicon.ico"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <meta name="description" content="Web site created using create-react-app"/>
    <link rel="apple-touch-icon" href="/logo192.png"/>
    <link rel="manifest" href="/manifest.json"/>
    <title>React App</title>
    <script defer="defer" src="/static/js/main.534fcdce.js"></script>
    <link href="${manifest.files["main.css"]}" rel="stylesheet">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
      ${root}
    </div>
    <script src="${manifest.files["runtime-main.js"]}"></script>
    ${chunks}
    <script src="${manifest.files["main.js"]}"></script>
  </body>
  </html>
  `;
}

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = (req, res, next) => {
  // 404가 떠야하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 시행해줌
  const context = {};
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx); // 렌더링 한 뒤
  res.send(createPage(root)); // 클라이언트에 넘겨줌
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
