import * as cron from 'node-cron';
import {balanceHistoryService, fileService, web3Service} from '../services';

export const cronJob = cron.schedule('*/10 * * * * *', async () => {

  console.log(`Cron-jobs `);

  const balance = await web3Service.getBalance();

  await balanceHistoryService.create({balance, walletAddress: '0xA145ac099E3d2e9781C9c848249E2e6b256b030D'});

  await fileService.writeBalance(balance);
});

