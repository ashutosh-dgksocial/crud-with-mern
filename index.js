const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const post_app_route = require('./routes/postRoute'); // Importing the routes from postRoute.js

// Middleware setup
const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// MongoDB connection
const MONGO_URI = "mongodb+srv://ashutosh:dgk492001@ashudigik-cluster.ugmuh.mongodb.net/ashudigik-cluster";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI); // Use MONGO_URI directly
        console.log("MongoDB connected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Connect to MongoDB
connectDB();

// Using the routes from postRoute.js
app.use('/api', post_app_route);

// Start server
app.listen(8000, (err) => {
    if (err) console.log('Error:', err.message);
    console.log('Server running on http://localhost:8000');
});
