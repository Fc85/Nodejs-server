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

// Afficher un produit spécifique
exports.findOne = (req, res) => {
  //Récupération de l'id du produit souhaité
  const id = req.params.toto;

  Produit.findByPk(id)
    .then((data) => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(404).send({ message: `L'id ${id} est introuvable` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
