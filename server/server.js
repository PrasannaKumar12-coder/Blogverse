import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import BlogRoute from "./routes/BlogRoutes.js";
const app = express();

// middlewares
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));
app.use(express.json())
dotenv.config(); 

// connecting database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));
app.use('/api/blog',BlogRoute)


app.listen(5000, () => console.log("Backend running at 5000"));
