const Pet = require('../models/Pet');

// Get all pets
exports.getAllPets = async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Add a new pet
exports.addPet = async (req, res) => {
    const { name, age, type, description } = req.body;
    try {
        const newPet = new Pet({ name, age, type, description });
        await newPet.save();
        res.status(201).json(newPet);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a pet
exports.updatePet = async (req, res) => {
    try {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPet) return res.status(404).json({ message: 'Pet not found' });
        res.json(updatedPet);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a pet
exports.deletePet = async (req, res) => {
    try {
        const deletedPet = await Pet.findByIdAndDelete(req.params.id);
        if (!deletedPet) return res.status(404).json({ message: 'Pet not found' });
        res.json({ message: 'Pet deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
