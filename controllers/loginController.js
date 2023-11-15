const User = require("../models/User");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .render("login", { msg: "Please provide email and password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).render("login", { msg: "Invalid Credentials" });
    }
    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      return res.status(400).render("login", { msg: "Invalid Credentials" });
    }

    req.session.user = {
      id: user._id,
      name: user.name,
    };

   
    res.status(200).redirect("/home");
  } catch (error) {}
};

const loadLogin = (req, res) => {
  res.status(200).render("login.ejs");
};

module.exports = { loadLogin, login };
