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

// Modifier un produit par son id
exports.update = (req, res) => {
  // Récupération de l'id du produit
  const id = req.params.id;

  Produit.update(req.body, { where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({ message: "Mis à jour avec succès !" });
      } else {
        res.status(404).send({ message: `L'id ${id} est introuvable` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Supprimer un produit par son id
exports.delete = (req, res) => {
  // Récupération de l'id du produit
  const id = req.params.id;

  Produit.destroy({ where: { id: id } })
    .then((num) => {
      if (num == 1) {
        res.status(200).send({ message: "Produit supprimé avec succès !" });
      } else {
        res.status(404).send({ message: `L'id ${id} est introuvable` });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

// Supprimer un produit par son id
exports.deleteAll = (req, res) => {
  Produit.destroy({ where: {}, truncate: false })
    .then((nums) => {
      res
        .status(200)
        .send({ message: `${nums} Produits supprimés avec succès !` });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
