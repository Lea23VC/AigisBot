import { Router } from 'express';
const router: Router = Router();

import { ping as pingController } from '../../../controllers/ping.controller';

router.get('/', pingController);

export default router;
