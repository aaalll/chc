import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import appRouters from './routes';
import { errorHandler } from './services/errorHandler';

dotenv.config();
const app = express();
const port = process.env.PORT || '3001';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(appRouters);
app.use(errorHandler);

app.listen(port, () => { console.log(`Server listening on port: ${port}`) });