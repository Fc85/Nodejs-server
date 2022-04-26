module.exports = (app) => {
  const produits = require("../controllers/produit.controller.js");

  var router = require("express").Router();
  app.use("/api/produits", router);

  // Créer un nouveau produit
  router.post("/", produits.toto);

  // Affiche tous les produits
  router.get("/", produits.findAll);

  // Affiche un produit par son ID
  router.get("/:toto", produits.findOne);

  // MAJ un produit par son ID
  router.put("/:id", produits.update);

  // // Supprime un produit par son ID
  // router.delete("/:id", produits.delete);

  // // Supprime tous les produits
  // router.delete("/", produits.deleteAll);
};
