const express = require("express");
const router = express.Router();
const {
  loadAdminLogin,
  adminLogin,
} = require("../controllers/adminLoginController");
const loadDashboard = require("../controllers/adminDashboard");
const { loadEdit, editUser } = require("../controllers/editUser");
const deleteUser = require("../controllers/deleteUser");

const { isLogin, isLogout } = require("../middleware/authAdmin");

const { loadAddUser, addUser } = require("../controllers/addUser");

router.get("/", isLogout, loadAdminLogin);
router.post("/", adminLogin);

router.get("/dashboard", isLogin, loadDashboard);

router.get("/edit/:id", isLogin, loadEdit);
router.post("/edit/:id", editUser);

router.get("/delete/:id", isLogin, deleteUser);

router.get("/addUser", isLogin, loadAddUser);
router.post("/addUser", addUser);

router.get("/logout", (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        res.send("Oops something went wrong, please try again");
      } else {
        res.redirect("/admin/");
      }
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
