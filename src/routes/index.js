import { Router } from 'express';

import version1 from './v1';

const router = Router();

router.use('/api/v1', version1);

export default router;
