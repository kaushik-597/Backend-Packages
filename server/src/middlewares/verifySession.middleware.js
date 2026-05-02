import ApiError from "../utils/ApiError.js";

export const verifySession = (req, res, next) => {
  if (!req.session.user) {
    throw new ApiError(401, "Unauthorized Access");
  }
  req.user = req.session.user;
  next();
};
