require("dotenv").config({ path: "./mysql/db.env" });
const express = require("express");
const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(express.urlencoded({ extended : false }));

const server = app.listen(3000, () => {
  console.log("Server started. port 3000.");
});

const db = require("./db.js");
//전체조회
app.get("/boards", async (request, res) => {
  res.send(await db.connection("boardList"));
});
//단건조회
app.get("/boards/:bno", async (request, res) => {
  res.send((await db.connection("boardInfo", request.params.bno))[0]);
});
// REST API 기준
//등록 : post
app.post("/boards", async (request, res)=>{
    let data = request.body.param;
    res.send((await db.connection("boardInsert", data)));
});

//수정 : put
app.put("/boards/:bno", async (request, res) => {
  let data = [request.body.param, request.params.bno];
  res.send((await db.connection("boardUpdate", data)));
});

//해당 게시글의 댓글 조회 - 쿼리스트링방식
app.get('/comments', async(request, res) =>{ // rest 방식 일때 불러오기 힘들다. 필요에 따라서 
  //querystring => ?key=value&key=value...
  let data = request.query.bno; // 우리가 넘겨줄 키값
  res.send((await db.connection("commentList", data)));
});