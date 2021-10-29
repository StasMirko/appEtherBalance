import { Document, Model, model, Schema } from 'mongoose';
import { IBalanceHistory } from '../../interfaces';
import { TableNamesEnum } from '../../constants';

export type BalanceHistoryType = IBalanceHistory & Document

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const BalanceHistorySchema: Schema = new Schema<IBalanceHistory>({
  balance: {
    type: String,
    required: true
  },
  walletAddress: {
    type: String,
    required: true
  }
}, {
  timestamps: { updatedAt: false }
});

export const BalanceHistoryModel: Model<BalanceHistoryType> = model<BalanceHistoryType>(
  TableNamesEnum.BALANCE_HISTORY,
  BalanceHistorySchema
);
