import type { NextFunction, Request, Response } from "express";
import type AppError from "../interfaces/AppError.js";




export const errorHandler = (
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
};