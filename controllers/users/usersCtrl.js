const bcrypt = require("bcryptjs");
const User = require("../../model/User/User");

//@desc register a new user
//@route POST /api/v1/users/register
//@access public
exports.register = async (req, res) => {
  console.log(req.body);

  try {
    // get the deatails
    const { username, password, email } = req.body;

    //! check if user exists
    const user = await User.findOne({ username });
    if (user) {
      throw new Error("user already exist ");
    }
    //Register new user
    const newUser = new User({
      username,
      email,
      password, // we are implementing email even if we dont need it so that we can allow forget and reset password
    });
    //! hashing the password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    await newUser.save();
    res.status(201).json({
      status: "success",
      message: "user registered succesful",
      _id: newUser?._id,
      username: newUser?.username,
      email: newUser?.email,
      role: newUser?.role,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error?.message,
    });
  }
};
//@desc Login user
//@route POST /api/v1/users/login
//access public
exports.login = async (req, res) => {
  try {
    //? get the login detaiils
    const { username, password } = req.body;
    //! check if users exists
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error("Inavalid login credentials ");
    }

    // compare the hash password with the request body
    const isMatched = await bcrypt.compare(password, user?.password);
    if (!isMatched) {
      throw new Error("Invalid login credentials ");
    }

    // update the last login activity

    user.lastLogin = new Date();
    await user.save();
    res.json({
      status: "success",
      user,
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error?.message,
    });
  }
};
