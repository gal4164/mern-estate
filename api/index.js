import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/User.route.js';

const app = express();

// MongoDB connection
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use("/api/user",userRouter);

