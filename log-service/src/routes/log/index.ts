import express from 'express';
import { logreversedArray } from '../../controllers'

const router = express.Router();

router.post('/log', logreversedArray);

export default router;