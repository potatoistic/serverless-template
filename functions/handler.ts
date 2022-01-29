import express, { json, urlencoded } from 'express';
import serverless from 'serverless-http';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/hello', (_, res) => {
  res.json({
    message: 'Hello World',
  });
});

export const hello = serverless(app);
