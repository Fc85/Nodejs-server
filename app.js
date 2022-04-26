const express = require("express");
const app = express();

// Parser les données depuis le formulaire
app.use(express.json());
// récupère les variables de l URL
app.use(express.urlencoded({ extended: true }));

// CORS
const cors = require("cors");
//urls autorisées
const corsOptions = {
  origin: ["http://localhost:19006"],
};

app.use(cors(corsOptions));

// BDD
const db = require("./app/models/index.js");
db.sequelize.sync();

// Routes / Controller
app.get("/", function (req, res) {
  res.send("Bienvenue sur notre super API !");
});

require("./app/routes/produit.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`L'API tournes sur le port ${PORT}. 💻`);
});
