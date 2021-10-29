import { NextFunction, Request, Response } from 'express';
import { balanceHistoryService } from '../../services';

class BalanceController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const records = await balanceHistoryService.getAllRecords();

      res.json(records);
    } catch (e) {
      next(e);
    }
  }
}

export const balanceController = new BalanceController();
