import * as Joi from 'joi';
import { BalanceHistoryModel } from '../database';
import { IBalanceHistory } from '../interfaces';
import { balanceValidator } from '../validators';

class BalanceHistoryService {
  create(walletData: Partial<IBalanceHistory>): Promise<IBalanceHistory> {

    const { error } = Joi.validate(walletData, balanceValidator);

    if (error) {
      throw new Error(error.details[0].message);
    }

    const balanceHistory = new BalanceHistoryModel(walletData);

    return balanceHistory.save();
  }

  getAllRecords(): Promise<IBalanceHistory[] | null> {
    return BalanceHistoryModel.find({}) as any;
  }
}

export const balanceHistoryService = new BalanceHistoryService();
