import { Application } from 'express';

import { Router } from 'express';

const router: Router = Router();
import pingRouter from './api/ping';

import apiRouter from './api';

export function setupRoutes(app: Application): void {
  app.use(router);
  app.use('/api', apiRouter);
  app.use('/', pingRouter);
}
