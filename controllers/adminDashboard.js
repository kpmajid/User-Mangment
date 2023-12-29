const User = require("../models/User");

const loadDashboard = async (req, res) => {
  try {
    let search = "";
    if (req.query.search) {
      search = req.query.search;
    }
    const users = await User.find({
      role: "user",
      $or: [
        {
          name: { $regex: ".*" + search + ".*", $options: "i" },
        },
        {
          email: { $regex: ".*" + search + ".*", $options: "i" },
        },
        {
          phone: { $regex: ".*" + search + ".*" },
        },
      ],
    });
    res.render("adminDashboard", { users: users });
  } catch (error) {
    console.log(error.message);
  }

  // const users = await User.find({ role: "user" }).select("-password");

  // res.status(200).render("adminDashboard", { users: users });
};

module.exports = loadDashboard;
