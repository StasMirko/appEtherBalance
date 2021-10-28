import Web3 from 'web3';

export class Web3Service {
  public async getBalance(): Promise<string> {
    const web3 = new Web3('https://mainnet.infura.io/v3/b2f2012b94fd45869feb6f154583572b');

    const balance = await web3.eth.getBalance('0xA145ac099E3d2e9781C9c848249E2e6b256b030D');

    const convert = await web3.utils.fromWei(balance, 'ether');

    return convert;
  }
}
