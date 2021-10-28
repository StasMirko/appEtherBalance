import * as cron from 'node-cron';
import {balanceHistoryService, fileService, web3Service} from '../services';
import {config} from '../config';

export const cronJob = cron.schedule(config.CRON_JOB_PERIOD, async () => {

  console.log(`Cron-jobs `);

  const balance = await web3Service.getBalance();

  await balanceHistoryService.create({balance, walletAddress: config.WALLET_ADDRESS});

  await fileService.writeBalance(balance);
});
