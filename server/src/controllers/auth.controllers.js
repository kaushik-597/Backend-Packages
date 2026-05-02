import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
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

  req.session.user = {
    _id: user._id,
    fullname: user.fullname,
    email: user.email,
  };

  //jwt - stateless auth
  // const accessToken = user.generateAccessToken();

  // const options = {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  //   maxAge: 1 * 60 * 60 * 1000,
  // };

  // return res
  //   .status(200)
  //   .cookie("accessToken", accessToken, options)
  //   .json(
  //     new ApiResponse(
  //       200,
  //       { user: loggedInUser, accessToken },
  //       "User LoggedIn Successfully",
  //     ),
  //   );

  return res
    .status(200)
    .json(new ApiResponse(200, req.session.user, "LogIn Successful"));
});

export const logout = asyncHandler(async (req, res) => {
  //jwt - stateless auth
  // const options = {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === "production",
  //   sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  //   maxAge: 0,
  // };
  // res
  //   .status(200)
  //   .clearCookie("accessToken", options)
  //   .json(new ApiResponse(200, {}, "User logged out successfully"));

  req.session.destroy((err) => {
    if (err) throw new ApiError(500, "Logout Failed");
    res.clearCookie("connect.sid");
    res.json(new ApiResponse(200, {}, "User logged out successfully"));
  });
});
