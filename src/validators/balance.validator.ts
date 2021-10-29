import * as Joi from 'joi';

export const balanceValidator = Joi.object({
  balance: Joi.string().required(),
  walletAddress: Joi.string().required()
});
