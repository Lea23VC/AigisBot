import { Router } from 'express';

import pingRouter from './ping';

const router: Router = Router();

router.use('/ping', pingRouter);

export default router;
