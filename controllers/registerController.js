const User = require("../models/User");

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  console.log({ user });
  res.status(201).render("register", { msg: "registration successful" });
};

const loadRegister = (req, res) => {
  res.status(200).render("register");
};

module.exports = { loadRegister, register };
