import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Users } from "../models/users.model.js";

export const register = asyncHandler(async (req, res) => {
  const { fullname, email, password } = req.validatedData;

  const existingUser = await Users.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, "User exists already");
  }

  const user = await Users.create({ fullname, email, password });

  const registeredUser = await Users.findById(user._id).select("-password");

  return res
    .status(201)
    .json(new ApiResponse(201, registeredUser, "User Registered Successfully"));
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.validatedData;

  const user = await Users.findOne({ email });

  const isValid = user && (await user.comparePassword(password));

  if (!isValid) {
    throw new ApiError(401, "Invalid Credentials");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { fullname: user.fullname, email: user.email },
        "User LoggedIn Successfully",
      ),
    );
});
