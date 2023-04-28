const emailSchema = require("../Models/email.schema");
const emailService = require("../Services/email.service");
module.exports.emailViewed = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await emailSchema.findById(id);
    console.log(result);
    if (!result.opened) {
      await emailService.patchEmail(id, { opened: true });
    }

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
