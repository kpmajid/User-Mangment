const express = require("express");
const router = express.Router();

const { loadRegister, register } = require("../controllers/registerController");
const { loadLogin, login } = require("../controllers/loginController");
const { loadHome } = require("../controllers/userHomeController");
const { isLogin, isLogout } = require("../middleware/auth");

const { loadEdit, editUser } = require("../controllers/editController");

router.get("/", isLogout, loadLogin);
router.post("/", login);

router.get("/register", isLogout, loadRegister);
router.post("/register", register);

router.get("/home", isLogin, loadHome);

router.get("/edit/:id", isLogin, loadEdit);
router.post("/edit/:id", editUser);

router.get("/logout", (req, res) => {
  try {
    
    req.session.destroy((err) => {
      if (err) {
        res.send("Oops something went wrong, please try again");
      } else {
        
        res.redirect("/");
      }
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
