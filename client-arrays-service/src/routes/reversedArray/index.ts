import express from 'express';
import { getReversedArray } from '../../controllers';
import { requestReversedArraySchemaValidate } from '../../validators';

const router = express.Router();

router.post('/array', requestReversedArraySchemaValidate, getReversedArray);

export default router;