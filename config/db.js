const { Sequelize } = require('sequelize');

// Configure la connexion à la base de données
const sequelize = new Sequelize('nom_de_ta_base', 'utilisateur', 'mot_de_passe', {
    host: 'localhost',
    dialect: 'mysql', // Remplace par 'postgres' si tu utilises PostgreSQL
});

// Teste la connexion
sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données réussie.'))
    .catch(err => console.error('Impossible de se connecter à la base de données:', err));

module.exports = sequelize;