const Categorie = require('../models/categorie.js');
exports.createCategorie = async (req, res) => {
    try {
        const { name } = req.body;
        const categorie = await Categorie.create({ name });
        res.status(201).json(categorie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getCategorieById = async (req, res) => {
    try {
        const categorie = await Categorie.findByPk(req.params.id);
        if (!categorie) {
            return res.status(404).json({ message: 'Catégorie non trouvée' });
        }
        res.status(200).json(categorie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateCategorie = async (req, res) => {
    try {
        const { name } = req.body;
        const [updated] = await Categorie.update({ name }, { where: { id: req.params.id } });
        if (updated) {
            const updatedCategorie = await Categorie.findByPk(req.params.id);
            return res.status(200).json(updatedCategorie);
        }
        throw new Error('Catégorie non trouvée');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteCategorie = async (req, res) => {
    try {
        const deleted = await Categorie.destroy({ where: { id: req.params.id } });
        if (deleted) {
            return res.status(204).send();
        }
        throw new Error('Catégorie non trouvée');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};