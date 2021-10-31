import * as Joi from 'joi';

export const tokenValidator = Joi.object({
  tokenName: Joi.string().required(),
  symbol: Joi.string().required(),
  tokenBalance: Joi.string().required(),
  tokenAddress: Joi.string().required(),
});
