import { Request, Response } from 'express';
import { logReversedArray } from '../services/api';

export const getReversedArray = async (req: Request, res: Response) => {
    
    const { number: number } = req.body;
    const reversedArray = Array.from({ length: number -1 }, (_, i) => number-i -1);
    await logReversedArray(reversedArray);
    res.json({ reversedArray });
};