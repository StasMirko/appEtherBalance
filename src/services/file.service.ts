import {appendFile} from 'fs';
import {join} from 'path';
import {config} from '../config';

class FileService {
  writeBalance(balance: string): void {
    appendFile(join(`${process.cwd()}`, config.TXT_FILE_PATH), `Balance: ${balance} \n`, (err) => {
      if (err){
        console.log(err);
      }
    });
  }
}

export const fileService = new FileService();
