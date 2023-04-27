const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide your first name"],
      minLength: [3, "Name must be at list 3 characters"],
      maxLength: [100, "Name is to long"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
          }),
        message: "Password {VALUE} is not strong",
      },
    },
    address: {
      type: String,
      minLength: [3, "Address must be at list 3 characters"],
      maxLength: [300, "Address is to long"],
    },

    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },

    phoneNumber: {
      type: String,
      unique: true,
      required: [true, "Phone Number address is required"],
      minLength: [0, "Phone Number Can't be Negative"],
    },
    imgURL: {
      type: String,
      validate: [validator.isURL, "pls provide a valid url"],
      default:
        "https://us.123rf.com/450wm/anatolir/anatolir2011/anatolir201105528/159470802-jurist-avatar-icon-flat-style.jpg?ver=6",
    },
    primary: {
      type: String,
      enum: ["true", "false"],
      default: "false",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },

  { timestamps: true }
);

// password hashing
userSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcryptjs.hashSync(password);
  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcryptjs.compareSync(password, hash);
  return isPasswordValid;
};

const user = mongoose.model("users", userSchema);
module.exports = user;
