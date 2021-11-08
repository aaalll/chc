import express from 'express';
import cors from 'cors';
import appRouter from './routes'

const app = express();
const port = process.env.PORT || '3002';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(appRouter);

app.listen(port, () => { console.log(`Server listening on port: ${port}`) });