const app = require('./app');
const http = require('http');

http
    .createServer(app)
    .listen(4000);
