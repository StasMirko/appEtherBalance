import * as cron from 'node-cron';
import {appendFile} from 'fs';
import {join} from 'path';
import {balanceHistoryService, Web3Service} from '../services';

export const cronJob = cron.schedule('*/10 * * * * *', async () => {

  console.log(`Cron-jobs `);

  const w = new Web3Service();
  const b = await w.getBalance();

  await balanceHistoryService.create({balance: b, walletAddress: '0xA145ac099E3d2e9781C9c848249E2e6b256b030D'});

  await appendFile(join(`${process.cwd()}`, '../', 'appEtherBalance/src/database/dataSheet.txt'), `${b} \n`, (err) => {
    if (err){
      console.log(err);
    }
  });
});

