const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-type", "trext/html");
  res.write("<html>");
  res.write("<head><title>My first</title><heads>");
  res.write("<body><h1>Hello There</h1></body>");
});

server.listen(3000);
