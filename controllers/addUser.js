const User = require("../models/User");
const bcrypt = require("bcrypt");

const addUser = async (req, res) => {
  try {
    const user = await User.create({ ...req.body });
    res.status(201).render("addUser", { msg: "Registration successful" });
  } catch (error) {
    // Check if the error is a validation error
    if (error.name === "ValidationError") {
      const errorMessages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).render("register", { errorMessages });
    }

    console.error("Error during registration:", error);
    res.status(500).send("Internal Server Error");
  }
};

const loadAddUser = (req, res) => {
  res.status(200).render("addUser");
};

module.exports = { loadAddUser, addUser };
