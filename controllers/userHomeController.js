const User = require("../models/User");
const loadHome = async (req, res) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");

  const userData = await User.findById({ _id: req.session.user.id }).select(
    "-password"
  );

  res.status(200).render("home.ejs", { data: userData });
};

module.exports = { loadHome };
