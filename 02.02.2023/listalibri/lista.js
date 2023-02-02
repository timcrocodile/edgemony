const http = require("http");
const libri = require("./libri");
const fs = require("fs");

let server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let html = fs.readFileSync("libri.html");
    res.end(html);
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    const user = JSON.stringify(libri);
    res.end(user);
  } else if (req.url === "/chisono") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let html = fs.readFileSync("chisono.html");
    res.end(html);
  } else {
    res.writeHead(404);
    res.end("not found");
  }
});

server.listen(8000, "localhost");
