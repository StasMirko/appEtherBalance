import * as http from 'http';
import {app} from './app';
import {config} from './config';
import {cronJob} from './cron-jobs';
// import {Web3Service} from './services';

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log(`Listen ${config.PORT}`);

  // const w = new Web3Service();
  // const b = await w.getBalance();
  // console.log(b);
});

cronJob.start();

process.on('SIGTERM', ()=>{
  server.close(() => {
    process.exit(0);
  });
});

process.on('uncaughtException', error => {
  console.log(error);
});

process.on('unhandledRejection', error => {
  console.log(error);
});
