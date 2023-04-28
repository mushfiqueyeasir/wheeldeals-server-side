const {
  saveEmail,
  getAllEmail,
  getSingleEmail,
  updateEmail,
  deleteEmail,
} = require("../Services/email.service");

exports.saveEmail = async (req, res, next) => {
  try {
    const result = await saveEmail(req.body);

    res.status(200).json({
      status: "success",
      message: "Email Send Successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Email Couldn't Send!",
      error: error.message,
    });
  }
};
exports.getAllEmail = async (req, res, next) => {
  try {
    const result = await getAllEmail(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Email Fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Email couldn't Fetched",
      error: error.message,
    });
  }
};
exports.getEmailById = async (req, res, next) => {
  try {
    const result = await getSingleEmail(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Email Fetched Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Email couldn't Fetched",
      error: error.message,
    });
  }
};
exports.updateEmail = async (req, res, next) => {
  try {
    const result = await updateEmail(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      message: "Email updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Email couldn't update",
      error: error.message,
    });
  }
};
exports.emailDelete = async (req, res, next) => {
  try {
    const result = await deleteEmail(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Email deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: "Email couldn't deleted",
      error: error.message,
    });
  }
};
