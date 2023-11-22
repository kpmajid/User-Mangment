const nocache = require("nocache");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/USER-MANAGEMENT");

const express = require("express");
const app = express();

const session = require("express-session");

app.set("view engine", "ejs");
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(nocache());

app.use(
  session({
    secret: "your-secret-key", // Replace with a secure, random string
    resave: false,
    saveUninitialized: true,
  })
);

const userRoutes = require("./routes/userRoutes");
app.use("/", userRoutes);

const adminRoutes = require("./routes/adminRoutes");
app.use("/admin", adminRoutes);

app.listen(3000);
