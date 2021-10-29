import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';

import { balanceRouter } from './routes';
import { cronJob } from './cron-jobs';
import { config } from './config';

dotenv.config();

cronJob.start();

class App {
  public readonly app: express.Application = express();

  constructor() {
    this.app.use(morgan('dev'));

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    this.mountRoutes();
    this.setupDB();
  }

  private setupDB(): void {
    mongoose.connect(config.MONGODB_URL, { useNewUrlParser: true });

    const db = mongoose.connection;
    db.on('error', console.log.bind(console, 'MONGO ERROR'));
  }

  private mountRoutes(): void {
    this.app.use('/balance', balanceRouter);
  }
}

export const app = new App().app;
