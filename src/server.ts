import * as http from 'http';

import * as app from './app';

import { normalizePort, onError, onListening } from './utils/utils';

const server = http.createServer(app);
const port  = normalizePort(process.env.port || 3000);
const host = process.env.host || '127.0.0.1';

server.listen(port, host);
server.on('error', onError(server));
server.on('listening', onListening(server));