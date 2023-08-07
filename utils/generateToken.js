const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  //create a payload for a user
  const payload = {
    user: {
      id: user.id,
    },
  };
  //sign the token with a  security key

  const token = jwt.sign(payload, "anykey", {
    expiresIn: 36000, //expires in an hour
  });
  return token;
};

module.exports = generateToken;
