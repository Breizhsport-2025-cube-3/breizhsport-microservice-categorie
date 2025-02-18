const express = require('express');
const sequelize = require('./config/db');
const categorieRoutes = require('./routes/categorieRoutes');

// Importez et initialisez le modèle Categorie
const Categorie = require('./models/categories')(sequelize);

const app = express();
const PORT = process.env.PORT || 4003; // Ajoutez une valeur par défaut pour PORT

// Middleware pour parser le JSON
app.use(express.json());

// Routes
app.use('/categories', categorieRoutes);

// Synchronisation de la base de données et démarrage du serveur
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Serveur démarré sur http://0.0.0.0:${PORT}`);
    });
  })
  .catch(err => console.error('Erreur de synchronisation avec la base de données:', err));