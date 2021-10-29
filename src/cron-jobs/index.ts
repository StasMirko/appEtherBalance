import * as cron from 'node-cron';
import { balanceHistoryService, fileService, web3Service } from '../services';
import { config } from '../config';
import { errorMassages } from '../constants';

export const cronJob = cron.schedule(config.CRON_JOB_PERIOD, async () => {

  const balance = await web3Service.getBalance();

  if (!balance) { throw new Error(errorMassages.BALANCE_IS_NOT_PROVIDED); }

  await balanceHistoryService.create({ balance, walletAddress: config.WALLET_ADDRESS });
  await fileService.writeBalance(balance);
});
