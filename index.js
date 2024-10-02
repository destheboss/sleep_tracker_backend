const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Import and use routes
const sleepRoutes = require('./routes/sleepRoutes');
app.use('/api', sleepRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Sleep Tracker Backend Running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});