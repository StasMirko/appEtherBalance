import { Router } from 'express';
import { tokenBalanceController } from '../../controllers';

const router = Router();

router.get('/', tokenBalanceController.getAll);

export const tokenBalanceRouter = router;
