import {appendFile} from 'fs';
import {join} from 'path';

class FileService {
  writeBalance(balance: string): void {
    appendFile(join(`${process.cwd()}`, '../', 'appEtherBalance/src/database/dataSheet.txt'), `Balance: ${balance} \n`, (err) => {
      if (err){
        console.log(err);
      }
    });
  }
}

export const fileService = new FileService();
