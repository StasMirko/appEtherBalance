import { Router } from 'express';
import { balanceController } from '../../controllers';

const router = Router();

router.get('/', balanceController.getAll);

export const balanceRouter = router;
