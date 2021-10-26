import {NextFunction, Request, Response} from 'express';

import * as express from 'express';
import * as dotenv from 'dotenv';
import * as morgan from 'morgan';
import {ResponseStatusCodesEnum} from './constants';
import {balanceRouter} from './routes';

dotenv.config();

class App {
  public readonly app: express.Application = express();

  constructor() {
    this.app.use(morgan('dev'));

    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));

    this.mountRoutes();

    this.app.use(this.customErrorHandler);
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
