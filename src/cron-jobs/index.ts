import * as cron from 'node-cron';
import * as fs from 'fs';
import * as path from 'path';

export const cronJob = cron.schedule('*/10 * * * * *', () => {
  console.log('Cron-jobs');
  fs.appendFile(path.join(`${process.cwd()}`, '../', 'appEtherBalance/src/data/dataSheet.txt'), '1 - 1 \n', (err) => {
    if (err){
      console.log(err);
    }
  });
});

