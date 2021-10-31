import * as cron from 'node-cron';
import { balanceHistoryService, fileService, tokenBalanceHistoryService, web3Service } from '../services';
import { config } from '../config';
import { errorMassages, tokenData } from '../constants';

export const cronJob = cron.schedule(config.CRON_JOB_PERIOD, async () => {

  const balance = await web3Service.getBalance();

  const tokenAddresses: string[] = [];
  const tokenNames: string[] = [];
  const symbols: string[] = [];

  tokenData.forEach((tokenObj) => {
    tokenAddresses.push(tokenObj.tokenAddress);
    tokenNames.push(tokenObj.tokenName);
    symbols.push(tokenObj.symbol);
  });

  const tokenBalances = await web3Service.getTokenBalances(tokenAddresses);

  if (!balance || !tokenBalances) { throw new Error(errorMassages.BALANCE_IS_NOT_PROVIDED); }

  await fileService.writeEtherBalance(balance);
  await fileService.writeTokenBalance(tokenBalances, tokenNames, symbols);
  await balanceHistoryService.create({ balance, walletAddress: config.WALLET_ADDRESS });

  for (let i = 0; i < tokenData.length; i++) {
    await tokenBalanceHistoryService.create({...tokenData[i], tokenBalance : tokenBalances[i]});
  }
});
