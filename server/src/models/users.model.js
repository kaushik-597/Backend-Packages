import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Fullname is needed"],
      minlength: 6,
      maxlength: 25,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Username is needed"],
      maxlength: 25,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is needed"],
      minlength: 8,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export const Users = await mongoose.model("Users", userSchema);
