import { Request, Response, NextFunction } from "express";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { AsyncHandler } from "../utils/AsyncHanlder.js";
import jwt, { JwtPayload } from "jsonwebtoken";

// Extend Express Request interface to include user property
interface AuthenticatedRequest extends Request {
  user?: any;
}

export const verifyJWT = AsyncHandler(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    console.log("************* Inside VerifyJWT Middleware *************");
    try {
      const token =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer ", "");

      if (!token) {
        throw new ApiError(401, "Unauthorized request");
      }

      const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as JwtPayload;
      const user = await User.findById(decodedToken?._id).select("-password");

      if (!user) {
        throw new ApiError(401, "Invalid JWT Token");
      }

      req.user = user; // Attach user to the request
      next();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Invalid JWT Token";
      throw new ApiError(401, errorMessage);
    }
  }
);
