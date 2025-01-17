const express = require('express');
const router = express.Router();
const { getAllPets, addPet, updatePet, deletePet } = require('../controllers/petController');

// Get all pets
router.get('/', getAllPets);

// Add a new pet
router.post('/', addPet);

// Update a pet
router.put('/:id', updatePet);

// Delete a pet
router.delete('/:id', deletePet);

module.exports = router;
