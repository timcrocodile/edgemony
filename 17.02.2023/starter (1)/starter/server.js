require("./models/DBconfig");
require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const bodyparser = require("body-parser");
const routes = require("./controllers/routes");
const routerLibri = require("./controllers/routesLibri");
const subRouter = require("./routes/subscriberController");
let app = express();
const PORT = 3000;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("./public"));

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.use("/libro", routerLibri);
app.use("/", routes);

app.use("/subscriber", subRouter);

app.listen(PORT, () => {
  console.log(`Server  ascolta sulla porta ${3000}`);
});
