const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");
const cors = require("cors");
const userRouter = require("./routes/user");
const connectDb = require("./connectionDb");
const dotenv = require('dotenv');

const app = express();

// Load environment variables from .env file
dotenv.config();

// Environment variables
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/reactapp";
const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDb(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB", err);
        process.exit(1);
    });

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Backend running" });
});

// User routes (signup, login)
app.use("/api/user", userRouter);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
