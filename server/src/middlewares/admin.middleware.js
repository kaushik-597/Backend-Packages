import ApiError from "../utils/ApiError";

export const isAdmin = (req, res, next) => {
  const user = req.session.user;
  if (!user) {
    throw new ApiError(401, "Unauthorized Access");
  }

  if (user.role !== "admin") {
    throw new ApiError(403, "Access Denied");
  }

  next();
};
