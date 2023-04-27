const jwt = require("jsonwebtoken");

exports.generateToken = (userInfo) => {
  const payLoad = {
    name: userInfo.name,
    imgURL: userInfo.imgURL,
    phoneNumber: userInfo.phoneNumber,
    role: userInfo.role,
    _id: userInfo._id,
  };

  const token = jwt.sign(payLoad, process.env.TOKEN_SECRET, {
    expiresIn: "1days",
  });

  return token;
};
