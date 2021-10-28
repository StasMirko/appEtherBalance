import Web3 from 'web3';
import {config} from '../config';
import {UnitEnum} from '../constants';

class Web3Service {
  public async getBalance(): Promise<string> {
    const web3 = new Web3(config.PROVIDER);

    const balance = await web3.eth.getBalance(config.WALLET_ADDRESS);

    return web3.utils.fromWei(balance, UnitEnum.ETHER);
  }
}

export const web3Service = new Web3Service();
