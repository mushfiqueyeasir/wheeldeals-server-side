const {
  signupService,
  loginService,
  getUsersService,
  getUserInfoSchema,
  updateUserInfoSchema,
  deleteUserInfoSchema,
} = require("../Services/user.service");

const { generateToken } = require("../utils/token");

exports.signup = async (req, res) => {
  try {
    let data = req.body;
    const result = await signupService(data);
    res.status(200).json({
      status: "success",
      message: "User insert successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User couldn't insert",
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    let { phoneNumber, password } = req.body;

    if (!phoneNumber || !password) {
      return res.status(400).json({
        status: "error",
        error: error.message,
      });
    }

    function makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    let result = await loginService(phoneNumber);
    if (!result) {
      return res.status(400).json({
        status: "error",
        error: "No user found please create an account",
      });
    }
    const isPasswordValid = result.comparePassword(password, result.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        status: "error",
        error: "Password is not correct",
      });
    }

    const token = generateToken(result);

    res.status(200).json({
      status: "success",
      message: "Welcome!!",
      data: { token },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Login Error pls Check The Data",
      error: error.message,
    });
  }
};

exports.getMe = async (req, res, next) => {
  console.log(req.user);
  try {
    const result = await loginService(req.user?.phoneNumber);
    let data;
    if (req.user?.phoneNumber === result.phoneNumber) {
      data = {
        phoneNumber: result.phoneNumber,
        role: result.role,
        name: result.name,
        status: result.status,
        imgURL: result.imgURL,
        id: result._id,
      };
    }
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Get User Data couldn't insert",
      error: error.message,
    });
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const result = await getUsersService(req.body);
    let data = [];
    result.forEach((Element) => {
      data.push({
        id: Element._id,
        phoneNumber: Element.phoneNumber,
        role: Element.role,
        name: Element.name,
        imgURL: Element.imgURL,
        status: Element.status,
        primary: Element.primary,
        createdAt: Element.createdAt,
        updatedAt: Element.updatedAt,
      });
    });

    res.status(200).json({
      status: "success",
      message: "Users Data get Successfully",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Users data get error",
      error: error.message,
    });
  }
};

//--------------------------single user--------------------------
exports.getUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const result = await getUserInfoSchema(userId);
    res.status(200).json({
      status: "success",
      message: "User List Data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't get User List Data an error occurred",
      error: error.message,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    let data = req.body;
    const phoneNumber = req.body.phoneNumber;
    data.phoneNumber = phoneNumber;
    const result = await updateUserInfoSchema(userId, data);

    res.status(200).json({
      status: "success",
      message: "User List Data Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "User List couldn't update an error occurred",
      error: error.message,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const result = await deleteUserInfoSchema(userId);

    res.status(200).json({
      status: "success",
      message: "User List Data is deleted",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Can't deleted User List Data an error occurred",
      error: error.message,
    });
  }
};
