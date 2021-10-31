import { Document, Model, model, Schema } from 'mongoose';
import { ITokenBalanceHistory } from '../../interfaces';
import { TableNamesEnum } from '../../constants';

export type TokenBalanceHistoryType = ITokenBalanceHistory & Document

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const TokenBalanceHistorySchema: Schema = new Schema<ITokenBalanceHistory>({
  tokenName: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  tokenBalance: {
    type: String,
    required: true
  },
  tokenAddress: {
    type: String,
    required: true
  }
}, {
  timestamps: { updatedAt: false }
});

export const TokenBalanceHistoryModel: Model<TokenBalanceHistoryType> = model<TokenBalanceHistoryType>(
  TableNamesEnum.TOKEN_BALANCE_HISTORY,
  TokenBalanceHistorySchema
);
