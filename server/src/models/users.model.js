import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Fullname is needed"],
      minlength: 6,
      maxlength: 25,
      trim: true,
    },
    username: {
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

export const Users = await mongoose.model("Users", userSchema);
