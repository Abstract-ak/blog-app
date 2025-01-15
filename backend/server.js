const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./src/config/db");
const blogRoutes = require("./src/routes/blogRoutes");

dotenv.config();

//  Database connection
connectDB();

const app = express();

//Middleware config.
app.use(express.json());

//  Routes
app.use("/api/blogs", blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
