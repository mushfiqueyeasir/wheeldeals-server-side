const emailService = require("../Services/email.service");
module.exports.emailViewed = async (req, res, next) => {
  try {
    const { id } = req.params;
    await emailService.patchEmail(id, { opened: true });
    console.log("gg");
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Event Couldn't Updated",
      error: error.message,
    });
    next();
  }
};
