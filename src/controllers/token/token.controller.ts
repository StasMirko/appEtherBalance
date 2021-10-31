import { NextFunction, Request, Response } from 'express';
import { tokenBalanceHistoryService } from '../../services';

class TokenBalanceController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const records = await tokenBalanceHistoryService.getAllRecords();

      res.json(records);
    } catch (e) {
      next(e);
    }
  }
}

export const tokenBalanceController = new TokenBalanceController();
