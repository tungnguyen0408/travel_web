const { resolveShowConfigPath } = require("@babel/core/lib/config/files");
const userService = require("../service/userService");

let handleCreateUser = async (req, res) => {
  let newUser = await userService.createNewUser(req.body);
  console.log(newUser);
  return res.render("login.ejs");
};

let handleLogin = async (req, res) => {
  let email = req.query.email;
  let password = req.query.password;
  console.log(
    "0000000000000000000000000000000000000000000000000000000000000000000"
  );
  console.log(req.query);
  if (!email || !password) {
    return res.status(500).json({
      errorCode: 1,
      message: "Missing input parameter !",
    });
  }
  let userData = await userService.handleUserLogin(email, password);
  return res.render("homePage.ejs");
};
module.exports = {
  handleLogin: handleLogin,
  handleCreateUser: handleCreateUser,
};
