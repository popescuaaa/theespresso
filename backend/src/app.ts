import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { LOG_FORMAT, ORIGIN, CREDENTIALS } from '@config';
import DB from '@databases';
import { Routes } from '@interfaces/routes.interface';
import errorMiddleware from '@middlewares/error.middleware';
import { stream } from '@utils/logger';

class App {
  private _app: Application;

  constructor(routes: Array<Routes>) {
    this._app = express();

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandling();
  }

  public getServer() {
    return this._app;
  }

  private connectToDatabase() {
    DB.sequelize.sync({ force: false });
  }

  private initializeMiddlewares() {
    this._app.use(morgan(LOG_FORMAT, { stream }));
    this._app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this._app.use(hpp());
    this._app.use(helmet());
    this._app.use(compression());
    this._app.use(express.json());
    this._app.use(express.urlencoded({ extended: true }));
    this._app.use(cookieParser());
  }

  private initializeRoutes(routes: Array<Routes>) {
    routes.forEach(route => {
      this._app.use(route.path || '/', route.router);
    });
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'Example docs',
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this._app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }

  private initializeErrorHandling() {
    this._app.use(errorMiddleware);
  }
}

export default App;
