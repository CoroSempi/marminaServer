import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/db.js';

// Import Routes
import adminRoute from "./routes/adminRoute.js";
import userRoute from "./routes/userRoute.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/admin', adminRoute); 
app.use('/api/user', userRoute); 


// Root
app.get('/', (req, res) => {
  res.send('OUR API is running...');
});

// DB Connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

