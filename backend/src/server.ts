import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import { createServer as createHttpServer, Server as HttpServer } from 'http';
import { createServer as createHttpsServer, Server as HttpsServer, ServerOptions} from 'https';
import { HTTPS, SSL_CERT, SSL_KEY, PORT, NODE_ENV } from '@config';
import { readFileSync } from 'fs';
import { logger } from './utils/logger';
import { Application } from 'express';

validateEnv();

const app: Application = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]).getServer();

let options: ServerOptions = HTTPS ? { key: readFileSync(SSL_KEY), cert: readFileSync(SSL_CERT) } : {};

const port = PORT || 3005;

let server: HttpServer | HttpsServer = HTTPS ? createHttpsServer(options, app) : createHttpServer(app);

console.log(port);

server.listen(port, () => {
    logger.info(`=================================`);
    logger.info(`======= ENV: ${NODE_ENV || 'development'} =======`);
    logger.info(`======= HTTPS Mode: ${!!HTTPS} ======`);
    logger.info(`🚀 App listening on the port ${port}`);
    logger.info(`=================================`);
});
