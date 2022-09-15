const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>Hello Node!</h1>");
    res.end("<p>Hello Server!</p>");
  })
  .listen(8080, () => {
    console.log("8080번 포트에서 서버 대기중");
  });

// http://localhost:8080/  여기서 내가만든 서버 확인 가능
