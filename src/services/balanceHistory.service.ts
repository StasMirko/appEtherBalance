import {BalanceHistoryModel} from '../database';
import {IBalanceHistory} from '../models';

class BalanceHistoryService {
  create(walletData: Partial<IBalanceHistory>): Promise<IBalanceHistory>{
    const balanceHistory = new BalanceHistoryModel(walletData);

    return balanceHistory.save();
  }
}

export const balanceHistoryService = new BalanceHistoryService();
