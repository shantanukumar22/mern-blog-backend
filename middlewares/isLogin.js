const jwt = require("jsonwebtoken");
const User = require("../model/User/User");
const isLogin = (req, res, next) => {
  // get token from header
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  //? verify the token
  jwt.verify(token, "anykey", async (err, decoded) => {
    // add user to the req object
    // get the user id
    const userId = decoded?.user?.id;
    const user = await User.findById(userId).select("username email role _id");
    // save user into req obj
    req.userAuth = user;

    if (err) {
      return "Invalid Token";
    } else {
      //!save the user
      //* send the user
      next();
    }
  });
};
module.exports = isLogin;
