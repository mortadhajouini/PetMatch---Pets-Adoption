const Appointment = require('../models/Appointment');

// Get all appointments
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Add a new appointment
exports.addAppointment = async (req, res) => {
    const { userId, date, time, description } = req.body;
    try {
        const newAppointment = new Appointment({ userId, date, time, description });
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update an appointment
exports.updateAppointment = async (req, res) => {
    try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAppointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json(updatedAppointment);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete an appointment
exports.deleteAppointment = async (req, res) => {
    try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json({ message: 'Appointment deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
