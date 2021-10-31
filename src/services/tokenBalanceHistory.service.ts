import * as Joi from 'joi';
import { TokenBalanceHistoryModel } from '../database';
import { ITokenBalanceHistory } from '../interfaces';
import { tokenValidator } from '../validators';

class TokenBalanceHistoryService {
  create(tokenData: Partial<ITokenBalanceHistory>): Promise<ITokenBalanceHistory> {

    const { error } = Joi.validate(tokenData, tokenValidator);

    if (error) {
      throw new Error(error.details[0].message);
    }

    const tokenBalanceHistory = new TokenBalanceHistoryModel(tokenData);

    return tokenBalanceHistory.save();
  }

  getAllRecords(): Promise<ITokenBalanceHistory[] | null> {
    return TokenBalanceHistoryModel.find({}) as any;
  }
}

export const tokenBalanceHistoryService = new TokenBalanceHistoryService();
