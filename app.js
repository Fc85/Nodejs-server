const express = require("express");
const app = express();

// Parser les données depuis le formulaire
app.use(express.json());
// récupère les variables de l URL
app.use(express.urlencoded({ extended: true }));

// BDD
const db = require("./app/models/index.js");
db.sequelize.sync();

app.get("/", function (req, res) {
  res.send("Hello Philippe🔥");
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`L'API tournes sur le port ${PORT}. 💻`);
});
