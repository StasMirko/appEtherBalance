import * as cron from 'node-cron';
import {appendFile} from 'fs';
import {join} from 'path';

export const cronJob = cron.schedule('*/10 * * * * *', () => {

  console.log(`Cron-jobs `);

  appendFile(join(`${process.cwd()}`, '../', 'appEtherBalance/src/data/dataSheet.txt'), `1/1 \n`, (err) => {
    if (err){
      console.log(err);
    }
  });
});

