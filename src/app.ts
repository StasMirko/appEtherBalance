import {NextFunction, Request, Response} from 'express';

import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
import {ResponseStatusCodesEnum} from './constants';
import {balanceRouter} from './routes';
import {cronJob} from './cron-jobs';
import {config} from './config';

dotenv.config();

class App {
  public readonly app: express.Application = express();

  constructor() {
    this.app.use(morgan('dev'));

    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));

    this.mountRoutes();
    this.setupDB();

    cronJob.start();

    this.app.use(this.customErrorHandler);
  }

  private setupDB(): void {
    mongoose.connect(config.MONGODB_URL, {useNewUrlParser: true});

    const db = mongoose.connection;
    db.on('error', console.log.bind(console, 'MONGO ERROR'));
  }

  private customErrorHandler(err: any, req: Request, res: Response, next: NextFunction): void{
    res
      .status(err.status || ResponseStatusCodesEnum.SERVER)
      .json({
        message: err.message || 'Unknown error',
        code: err.code
      });
  }

  private mountRoutes(): void {
    this.app.use('/balance', balanceRouter);
  }
}

export const app = new App().app;
