import { appendFile } from 'fs';
import { join } from 'path';
import { config } from '../config';

class FileService {
  async writeEtherBalance(balance: string): Promise<void> {

    appendFile(join(`${process.cwd()}`, config.TXT_FILE_PATH), `Ether balance: ${balance} \n`, (err) => {
      if (err){
        console.log(err);
      }
    });
  }

  async writeTokenBalance(
    tokenBalances: string[],
    tokenName: string[],
    symbol: string[]
  ): Promise<void> {

    for (let i = 0; i < symbol.length; i++) {

      appendFile(join(`${process.cwd()}`, config.TXT_FILE_PATH),
        `Token: ${tokenName[i]}, Symbol: ${symbol[i]}  , Token balance: ${tokenBalances[i]} \n`,
        (err) => {

        if (err){
          console.log(err);
        }
      });
    }
  }
}

export const fileService = new FileService();
