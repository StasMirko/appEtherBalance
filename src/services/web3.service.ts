import Web3 from 'web3';

export class Web3Service {
  public async getBalance(): Promise<void> {
    const web3 = new Web3('https://mainnet.infura.io/v3/b2f2012b94fd45869feb6f154583572b');

    console.log(web3);
    const balance = await web3.eth.getBalance('0xa145ac099e3d2e9781c9c848249e2e6b256b030d');

    console.log(balance);
    //
    // return balance
  }
}
