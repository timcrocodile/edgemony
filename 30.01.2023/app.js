// metodo require() => richiamo il modulo built-in
const http = require("http");

const server = http.createServer((req, res) => {
  // res.end("home");
  //http://localhost:3000/
  if (req.url === "/") res.end("hello world");
  //http://localhost:3000/studenti
  else if (req.url === "/studenti") res.end("hello visitor");
  //http://localhost:3000/corsi
  else if (req.url === "/corsi") res.end("hello");
  //404
  else {
    res.writeHead(404);
    res.end("pagina non trovata");
  }
});

server.listen(3000);
