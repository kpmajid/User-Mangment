const User = require("../models/User");

const loadAdminLogin = (req, res) => {
  res.status(200).render("adminLogin");
};

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .render("adminLogin", { msg: "Please provide email and password" });
    }

    const admin = await User.findOne({ email, role: "admin" });
    if (!admin) {
      return res
        .status(400)
        .render("adminLogin", { msg: "Invalid Credentials" });
    }
    
    const isPasswordCorrect = await admin.comparePassword(password);

    if (!isPasswordCorrect) {
      return res
        .status(400)
        .render("adminLogin", { msg: "Invalid Credentials" });
    }

    req.session.admin = {
      id: admin._id,
      name: admin.name,
    };

    
    res.status(200).redirect("/admin/dashboard");
    
  } catch (error) {}
};

module.exports = { loadAdminLogin, adminLogin };
