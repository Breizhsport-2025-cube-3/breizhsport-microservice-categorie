const express = require('express');
const sequelize = require('./config/db');
const categorieRoutes = require('./routes/categorieRoutes');

const app = express();
const PORT = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.use('/categories', categorieRoutes);

// Synchronisation de la base de données et démarrage du serveur
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Serveur démarré sur http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Erreur de synchronisation avec la base de données:', err));