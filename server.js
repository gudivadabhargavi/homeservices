require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./models/db');
const authRoutes = require('./routes/authRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection Check
if (!db) {
  console.error('Database connection failed. Check your connection settings.');
  process.exit(1);
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));


// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// HTML Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'appearnce.html')));
app.get('/booknow', (req, res) => res.sendFile(path.join(__dirname, 'public', 'booknow.html')));

// API Routes
app.use('/auth', authRoutes);
app.use('/services', serviceRoutes);
app.use('/bookings', bookingRoutes);

// 404 Error Handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});