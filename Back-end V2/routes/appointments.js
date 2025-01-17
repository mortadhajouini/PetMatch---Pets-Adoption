const express = require('express');
const router = express.Router();
const { getAppointments, addAppointment, updateAppointment, deleteAppointment } = require('../controllers/appointmentController');

// Get all appointments
router.get('/', getAppointments);

// Add a new appointment
router.post('/', addAppointment);

// Update an appointment
router.put('/:id', updateAppointment);

// Delete an appointment
router.delete('/:id', deleteAppointment);

module.exports = router;
