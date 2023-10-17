const express = require("express");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const contactRouter = require("./routes/contactRoutes");

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use("/api/contact", contactRouter);
connectDB();

const PORT = process.env.PORT || 6677;

app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`server is running on port ${PORT}`)
);
