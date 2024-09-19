import { Router, Request, Response, NextFunction } from "express";
import {
  registerUser,
  loginUser,
  confirmEmail,
  logoutUser,
} from "../controllers/auth.controllers.js";

const router = Router();

router
  .route("/signup")
  .post((req: Request, res: Response, next: NextFunction) => {
    registerUser(req, res, next);
  });

router
  .route("/confirmEmail/:id")
  .get((req: Request, res: Response, next: NextFunction) => {
    confirmEmail(req, res, next);
  });

router
  .route("/login")
  .post((req: Request, res: Response, next: NextFunction) => {
    loginUser(req, res, next);
  });

router
  .route("/logout")
  .get((req: Request, res: Response, next: NextFunction) => {
    logoutUser(req, res, next);
  });

export default router;
