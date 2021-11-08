import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        return res.status(500).json({ errors: err, message: err });
    }
    res.status(500).json('Server error');
}