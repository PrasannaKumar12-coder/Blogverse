import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import BlogRoute from "./routes/BlogRoutes.js";

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/blog", BlogRoute);

// Error handling
app.use(( req, res,) => {
  res.('api is working')
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
