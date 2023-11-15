const User = require("../models/User");

const loadEdit = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const userData = await User.findById({ _id: id }).select("-password");

  res.status(200).render("edit.ejs", { data: userData });
};

const editUser = async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  console.log(req.body);
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
  res.redirect("/home");
};

module.exports = { loadEdit, editUser };
