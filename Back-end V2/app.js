const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const authRoutes = require('./routes/auth');
const petRoutes = require('./routes/pets');
const appointmentRoutes = require('./routes/appointments');
const profileRoutes = require('./routes/profile');

// Routes Middleware
app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/appointments', appointmentRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Database connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
