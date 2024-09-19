import { Request, Response, NextFunction } from "express";

const AsyncHandler = (
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (error: any) {
      console.log("******** Inside AsyncHandler ********");
      console.error("Error: ", error);
      res.status(error.statusCode || 500).json({
        success: false,
        message: error.message || "Internal Server Error",
      });
    }
  };
};

export { AsyncHandler };
