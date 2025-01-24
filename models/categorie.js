const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Categorie', {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            defaultValue: '',
            allowNull: false
        }
    }, { paranoid: true }); // Soft delete
};