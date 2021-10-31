import Web3 from 'web3';
import { config } from '../config';
import { contractABI } from '../constants';

class Web3Service {
  private web3 = new Web3(config.PROVIDER);

  public async getBalance(): Promise<string> {
    const balance = await this.web3.eth.getBalance(config.WALLET_ADDRESS);

    return this.web3.utils.fromWei(balance);
  }

  public async getTokenBalances(tokenAddresses: string[]): Promise<string[]> {
    const tokenBalances: string[] = [];

    for (const tokenAddress of tokenAddresses) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const tokenInst = new this.web3.eth.Contract(contractABI, tokenAddress);
      const tokenBalance = await tokenInst.methods.balanceOf(config.WALLET_ADDRESS).call();

      tokenBalances.push(this.web3.utils.fromWei(tokenBalance));
    }

    return tokenBalances;
  }
}

export const web3Service = new Web3Service();
