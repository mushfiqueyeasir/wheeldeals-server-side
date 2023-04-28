const mongoose = require("mongoose");
const validator = require("validator");

const emailSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Name must be at list 3 characters"],
    },
    email: {
      type: String,
      validator: [validator.isEmail, "provide a valid Email"],
      trim: true,
      lowercase: true,
      required: [true, "Email address is required"],
    },

    subject: {
      type: String,
      required: [true, "Subject is required"],
      minLength: [3, "Name must be at list 3 characters"],
    },

    message: {
      type: String,
      required: [true, "Message is required"],
      minLength: [3, "Message must be at list 3 characters"],
    },
    opened: {
      type: String,
      enum: [true, false],
      default: false,
    },
  },

  { timestamps: true }
);

const email = mongoose.model("email", emailSchema);
module.exports = email;
