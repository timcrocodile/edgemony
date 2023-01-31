const http = require("http");
const os = require("os");
let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();
let prodotti = `<!doctype html>
<html>
<head>
</head>
<body>
<h1>ecco i prodotti che puoi acquistare on line</h1>
<button>metti nel carrello</button>
<button> check out</button>
<a href="http://localhost:3001/" class="href">torna alla HOME</a>
</body>
</html>`;

let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
<a href="http://localhost:3001/prodotti" class="href">link diretto alla pagina dei PRODOTTI</a>
</br>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio);
  else if (req.url === "/prodotti") res.end(prodotti);
  else if (req.url === "/clienti") res.end("tutti i clienti");
  else {
    res.writeHead(404);
    res.end("pagina non trovata");
  }
});
server.listen(3001);
console.log(messaggio);
