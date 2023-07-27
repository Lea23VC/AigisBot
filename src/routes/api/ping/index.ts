import { Router } from 'express';
const router: Router = Router();

import { ping as pingController } from '../../../controllers/ping.controller';

router.post('/', pingController);

export default router;
