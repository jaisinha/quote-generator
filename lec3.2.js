const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("hello from the");
  } else if (req.url == "/about") {
    res.end("hello from the about?US sides");
  } else if (req.url == "/contact") {
    res.end("<h1> 404 error</h>");
  } else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/lec3.4.json`, "utf-8", (err, data) => {
      console.log(data);

      res.end(data);
    });
    res.end("<h1> hello from user api</h>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  //listening the request
  console.log("ere");
});
