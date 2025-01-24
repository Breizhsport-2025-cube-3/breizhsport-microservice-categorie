const { Op } = require('sequelize');
const Categorie = require('../models/categories')(require('../config/db'));

module.exports = {
  // Créer une nouvelle catégorie
  createCategorie: async (req, res) => {
    try {
      const { name } = req.body;

      // Validation des données
      if (!name) {
        return res.status(400).json({ message: 'Le champ "name" est requis.' });
      }

      // Création de la catégorie
      const newCategorie = await Categorie.create({ name });
      res.status(201).json(newCategorie);
    } catch (error) {
      console.error('Erreur lors de la création de la catégorie:', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  },

  // Récupérer toutes les catégories
  getAllCategories: async (req, res) => {
    try {
      const categories = await Categorie.findAll();
      res.status(200).json(categories);
    } catch (error) {
      console.error('Erreur lors de la récupération des catégories:', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  },

  // Récupérer une catégorie par ID
  getCategorieById: async (req, res) => {
    try {
      const { id } = req.params;

      // Récupération de la catégorie
      const categorie = await Categorie.findByPk(id);

      if (!categorie) {
        return res.status(404).json({ message: 'Catégorie non trouvée.' });
      }

      res.status(200).json(categorie);
    } catch (error) {
      console.error('Erreur lors de la récupération de la catégorie:', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  },

  // Mettre à jour une catégorie par ID
  updateCategorie: async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      // Validation des données
      if (!name) {
        return res.status(400).json({ message: 'Le champ "name" est requis.' });
      }

      // Recherche de la catégorie à mettre à jour
      const categorie = await Categorie.findByPk(id);

      if (!categorie) {
        return res.status(404).json({ message: 'Catégorie non trouvée.' });
      }

      // Mise à jour de la catégorie
      categorie.name = name;
      await categorie.save();

      res.status(200).json(categorie);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la catégorie:', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  },

  // Supprimer une catégorie par ID
  deleteCategorie: async (req, res) => {
    try {
      const { id } = req.params;

      // Recherche de la catégorie à supprimer
      const categorie = await Categorie.findByPk(id);

      if (!categorie) {
        return res.status(404).json({ message: 'Catégorie non trouvée.' });
      }

      // Suppression de la catégorie
      await categorie.destroy();

      res.status(200).json({ message: 'Catégorie supprimée avec succès.' });
    } catch (error) {
      console.error('Erreur lors de la suppression de la catégorie:', error);
      res.status(500).json({ message: 'Erreur interne du serveur.' });
    }
  },
};
