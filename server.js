require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // Add this line
const cors = require('cors');

const app = express();

// Connect to database
connectDB(); // Add this line

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
// Add other routes as needed

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
