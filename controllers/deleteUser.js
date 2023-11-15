const User = require("../models/User");

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.deleteOne({ _id: id });
  res.redirect("/admin/dashboard");
};

module.exports = deleteUser;
