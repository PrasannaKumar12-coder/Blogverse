import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import BlogRoute from "./routes/BlogRoutes.js";
const app = express();

// middlewares
app.use(cors({
  origin: process.env.URL, 
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

app.use('/',(req,res)=>{
  res.send('api is running')
})
app.use('/api/blog',BlogRoute)


app.listen(5000, () => console.log("Backend running at 5000"));
