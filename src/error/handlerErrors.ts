import { NextFunction, Response, Request } from 'express';
import AppError from './AppError';

function handlerErrors(err: Error, request: Request, response: Response, _next: NextFunction): Response {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    console.log(err);
    return response.status(500).json({
        error: 'error',
        message: `Internal server error ${err.message}`,
    });
}

export default handlerErrors;
