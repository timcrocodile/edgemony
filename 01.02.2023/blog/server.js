const http = require("http");
const os = require("os");
let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();
const PORT = 3001;

let articoli = `<!doctype html>
<html>
<head>
</head>
<body>
<h1>ecco il blog più chiacchierato del mondo!!....</h1>
<button>iscriviti</button>
<button> buy me a coffee!</button>
<a href="http://localhost:3001/commenti" class="href">vai ai commenti</a>
<a href="http://localhost:3001/utenti" class="href">vai alla lista utenti</a>
</body>
</html>`;

let commenti = `<!doctype html>
<html>
<head>
</head>
<body>
<a href="http://localhost:3001/" class="href">torna alla home</a>
</br>
<p>qui commentiamo a profusioneeeeee!!</p>
<ul>
  <li>commentiamooooooooooooooooooooooooooo</li>
  <li>cooooooooooooooommmmentttooooooooooooo</li>
  <li>COMMENDATORISSSIMOOOOOOOOOOOOOOOOOOOOO</li>
</ul>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usand la piattaforma: ${piattaforma}
</body>
</html>`;

let utenti = `<!doctype html>
<html>
<head>
</head>
<body>
<p>pagina dove ci sono gli utenti : </p>
<ul>
  <li>pippo</li>
  <li>pluto</li>
  <li>colombo</li>
</ul>
<a href="http://localhost:3001/" class="href">torna alla home</a>
</br>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usand la piattaforma: ${piattaforma}
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(articoli);
  else if (req.url === "/commenti") res.end(commenti);
  else if (req.url === "/utenti") res.end(utenti);
  else {
    res.writeHead(404);
    res.end("pagina non trovata");
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
