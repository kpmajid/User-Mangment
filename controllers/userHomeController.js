const User = require("../models/User");
const loadHome = async (req, res) => {
  const userData = await User.findById({ _id: req.session.user.id }).select(
    "-password"
  );

  res.status(200).render("home.ejs", { data: userData });
};

module.exports = { loadHome };
