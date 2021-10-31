import { appendFile } from 'fs';
import { join } from 'path';
import { IWriteTokenBalance } from '../interfaces';
import { config } from '../config';

class FileService {
  async writeEtherBalance(balance: string): Promise<void> {
    appendFile(join(`${process.cwd()}`, config.TXT_FILE_PATH), `Ether balance: ${balance} \n`, (err) => {
      if (err) {console.log(err);}
    });
  }

  async writeTokenBalance(parameters: IWriteTokenBalance): Promise<void> {
    const { tokenNames, symbols, tokenBalances } = parameters;

    for (let i = 0; i < symbols.length; i++) {
      appendFile(join(`${process.cwd()}`, config.TXT_FILE_PATH),
        `Token: ${tokenNames[i]}, Symbol: ${symbols[i]}  , Token balance: ${tokenBalances[i]} \n`,
        (err) => {
          if (err) {console.log(err);}
        });
    }
  }
}

export const fileService = new FileService();
