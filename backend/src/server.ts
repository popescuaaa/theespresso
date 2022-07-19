import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import { createServer as createHttpServer, Server } from 'http';
import { createServer as createHttpsServer, ServerOptions} from 'https';
import { HTTPS, SSL_CERT, SSL_KEY, PORT, NODE_ENV } from '@config';
import { readFileSync } from 'fs';
import { logger } from './utils/logger';

validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

let options: ServerOptions = {
    key: readFileSync(SSL_KEY),
    cert: readFileSync(SSL_CERT)
};

const port = PORT || 3005;

let server: Server = HTTPS ? createHttpServer(app.getServer()) : createHttpsServer(options, app.getServer());

server.listen(port, () => {
    logger.info(`=================================`);
    logger.info(`======= ENV: ${NODE_ENV || 'development'} =======`);
    logger.info(`🚀 App listening on the port ${port}`);
    logger.info(`=================================`);
});
