import * as cron from 'node-cron';
import {appendFile} from 'fs';
import {join} from 'path';
import {Web3Service} from '../services';

export const cronJob = cron.schedule('*/10 * * * * *', async () => {

  console.log(`Cron-jobs `);

  const w = new Web3Service();
  const b = await w.getBalance();
  // console.log(b);

  await appendFile(join(`${process.cwd()}`, '../', 'appEtherBalance/src/data/dataSheet.txt'), `${b} \n`, (err) => {
    if (err){
      console.log(err);
    }
  });
});

