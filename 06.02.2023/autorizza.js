const autorizza = (req, res, next) => {
  const { user } = req.query;

  if (user === "fabio") {
    req.user = { name: "fabio" };

    next();
  } else {
    console.log(user);
    res.status(401).send(`utente ${user} non è autorizzato`);
  }
};

module.exports = autorizza;
