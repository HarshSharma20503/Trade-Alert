import { Router, Request, Response, NextFunction } from "express";
import { verifyJWT } from "../middlewares/auth.middlewares.js";
import {
  addCompany,
  getUser,
  removeStock,
  updateCompanyStock,
} from "../controllers/user.controllers.js";

const router = Router();

// Define route handlers with type annotations
router
  .route("/")
  .get(verifyJWT, (req: Request, res: Response, next: NextFunction) =>
    getUser(req, res, next)
  );

router
  .route("/addCompany")
  .post(verifyJWT, (req: Request, res: Response, next: NextFunction) =>
    addCompany(req, res, next)
  );

router
  .route("/updateCompanyStock")
  .post(verifyJWT, (req: Request, res: Response, next: NextFunction) =>
    updateCompanyStock(req, res, next)
  );

router
  .route("/deleteCompanyStock")
  .post(verifyJWT, (req: Request, res: Response, next: NextFunction) =>
    removeStock(req, res, next)
  );

export default router;
