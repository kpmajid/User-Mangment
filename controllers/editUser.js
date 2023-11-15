const User = require("../models/User");

const loadEdit = async (req, res) => {
  const { id } = req.params;
  
  const userData = await User.findById({ _id: id }).select("-password");

  res.status(200).render("editUser.ejs", { data: userData });
};

const editUser = async (req, res) => {
  
  const { id } = req.params;
  
  const { name, email, phoneNum } = req.body;
  const data = { name, email, phoneNum };
  await User.findOneAndUpdate(
    { _id: id },
    { name: data.name, email: data.email, phoneNum: data.phoneNum },
    {
      new: true,
      runValidators: true,
    }
  );
  res.redirect("/admin/dashboard");
};

module.exports = { loadEdit, editUser };
