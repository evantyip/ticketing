import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@etytickets/common';
import { createChargeRouter } from './routes/new';

//initialization
const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: false,
    // development
    //secure: process.env.NODE_ENV !== 'test',
  })
);
//must be put after cookie session
app.use(currentUser);

// specific routes
app.use(createChargeRouter);

// anything that isn't a valid route
app.all('*', async (req, res) => {
  throw new NotFoundError();
});
// middlewares
app.use(errorHandler);

export { app };
