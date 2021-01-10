import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@etytickets/common';

import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes/index-ticket';
import { updateTicketRouter } from './routes/update';

//initialization
const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
//must be put after cookie session
app.use(currentUser);

// specific routes
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

// anything that isn't a valid route
app.all('*', async (req, res) => {
  throw new NotFoundError();
});
// middlewares
app.use(errorHandler);

export { app };
