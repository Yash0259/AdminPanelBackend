// Import ES Modules
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './src/config/database.js';
import productRoutes from './src/Routes/productRoutes.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: process.env.VITE_API_URL || "*", // Allow frontend URL from .env
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));


// Routes
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send("Hello, Node.js Backend is running!");
});

// DB Connection
sequelize
    .sync({ alter: true })  // Auto-updates table structure without data loss
    .then(() => console.log("✅ Database Synced"))
    .catch((err) => console.error("❌ Sync Error:", err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
