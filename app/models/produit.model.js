module.exports = (sequelize, Sequelize) => {
  const Produit = sequelize.define("produit", {
    nom: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
    prix: {
      type: Sequelize.FLOAT,
    },
  });

  return Produit;
};
