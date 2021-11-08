import express, { Request, Response } from 'express';
import reversedArray from './reversedArray';

const router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.json({ upTime: process.uptime() });
});

router.use(reversedArray);


export default router;
