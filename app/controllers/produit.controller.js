const db = require("../models/index.js");
const Produit = db.produits;
const Op = db.Sequelize.Op;

//Créer un nouveau produit
exports.toto = (req, res) => {
  // Créer un nouvel objet
  const newProduit = {
    nom: req.body.nom,
    description: req.body.description,
    prix: req.body.prix,
  };

  // Enregistrer cet objet dans la BDD
  Produit.create(newProduit)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

//Afficher tout les produits
exports.findAll = (req, res) => {
  Produit.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
