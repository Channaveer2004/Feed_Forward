import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import { connectDB } from "./config/db.js";


import authRoutes from "./routes/auth.js";
import profileRoutes from "./routes/profile.js";
import feedbackRoutes from "./routes/feedback.js";
import coursesRoutes from "./routes/courses.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();
const app = express();
app.set('trust proxy', true); 


connectDB();


app.use(helmet());


const allowedOrigins = [
  "https://posspoleassignment.vercel.app",
  "https://feed-forward-blush.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());



const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 1000,
});
app.use(limiter);


app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/courses", coursesRoutes);
app.use("/api/admin", adminRoutes);


app.get("/", (req, res) => {
  res.send("Backend is running ");
});


app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
