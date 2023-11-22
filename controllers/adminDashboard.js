const User = require("../models/User");

const loadDashboard = async (req, res) => {
  const users = await User.find({ role: "user" }).select("-password");

  res.status(200).render("adminDashboard", { users: users });
};

module.exports = loadDashboard;
