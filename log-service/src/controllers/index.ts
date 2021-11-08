import { Request, Response } from 'express';

export const logreversedArray = (req: Request, res: Response) => {
    const { reversedArray } = req.body;
    console.log(reversedArray ? reversedArray : 'Some log request received');
    res.send();
}