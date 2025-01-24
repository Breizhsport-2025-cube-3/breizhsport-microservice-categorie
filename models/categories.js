const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Categorie', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  }, {
    tableName: 'categories', // Nom de la table dans la base de données
    timestamps: false, // Désactive les champs `createdAt` et `updatedAt`
  });
};