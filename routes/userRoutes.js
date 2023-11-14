const express = require("express");
const router = express.Router();

const { loadRegister, register }=require('../controllers/registerController')

router.get("/", (req, res) => {
  res.status(200).render("login.ejs");
});

router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (username == "majid" && password == "123") {
    res.status(200).render("home.ejs", { username, password });
  } else {
    res.redirect("/");
  }
});

router.get("/register", (req, res) => {
  res.status(200).render("register.ejs");
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.send({ username, password });
});

module.exports = router;
