import express, { json, urlencoded } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import serverless from 'serverless-http';

const app = express();

app.use(cors());
app.use(helmet());

app.use(json());
app.use(urlencoded({ extended: true }));

/**
 * @route GET /hello
 * @description Returns hello world
 */
app.get('/hello', (_, res: express.Response) => {
  res.json({
    message: 'Hello World',
  });
});

export const hello = serverless(app);
